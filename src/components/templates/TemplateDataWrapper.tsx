'use client';

import * as React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { TriangleAlert } from 'lucide-react';
import { useUserDetails } from '@/hooks/useUserDetails';
import { useEducations } from '@/hooks/useEducations';
import { useProjects } from '@/hooks/useProjects';
import { useExperience } from '@/hooks/useExperience';

type ResourceState = {
    isLoading: boolean;
    isError: boolean;
    error: unknown;
    refetch: () => void;
};

export type TemplateData = {
    slug: string;
    user: ReturnType<typeof useUserDetails>['user'];
    educations: ReturnType<typeof useEducations>['educations'];
    projects: ReturnType<typeof useProjects>['projects'];
    experiences: ReturnType<typeof useExperience>['experiences']; // ⬅️ NEW
};

type Ctx = {
    data: TemplateData;
    states: {
        user: ResourceState;
        educations: ResourceState;
        projects: ResourceState;
        experiences: ResourceState; // ⬅️ NEW
    };
};

const TemplateDataContext = React.createContext<Ctx | null>(null);
export const useTemplateData = () => {
    const ctx = React.useContext(TemplateDataContext);
    if (!ctx)
        throw new Error(
            'useTemplateData must be used within <TemplateDataWrapper>',
        );
    return ctx;
};

export default function TemplateDataWrapper({
    slug,
    children,
    withUser = true,
    withEducations = true,
    withProjects = true,
    withExperiences = true, // ⬅️ NEW flag
}: {
    slug: string;
    children: React.ReactNode;
    withUser?: boolean;
    withEducations?: boolean;
    withProjects?: boolean;
    withExperiences?: boolean; // ⬅️ NEW
}) {
    // Always call hooks; control fetching via enabled flags
    const userQ = useUserDetails(slug, { enabled: withUser });
    const eduQ = useEducations(slug, { enabled: withEducations });
    const projQ = useProjects(slug, { enabled: withProjects });
    const expQ = useExperience(slug, { enabled: withExperiences }); // ⬅️ NEW

    const anyLoading =
        userQ.isLoading || eduQ.isLoading || projQ.isLoading || expQ.isLoading; // ⬅️ NEW
    const anyError =
        userQ.isError || eduQ.isError || projQ.isError || expQ.isError; // ⬅️ NEW

    if (anyLoading) {
        return (
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 space-y-4">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-2/3" />
            </div>
        );
    }

    if (anyError) {
        const refetchAll = () => {
            userQ.refetch();
            eduQ.refetch();
            projQ.refetch();
            expQ.refetch(); // ⬅️ NEW
        };
        return (
            <Alert
                variant="destructive"
                className="border-amber-500/40 bg-amber-500/10 text-amber-100"
            >
                <TriangleAlert className="h-4 w-4" />
                <AlertTitle>Couldn’t load data</AlertTitle>
                <AlertDescription className="mt-2">
                    Please check your connection or try again.
                </AlertDescription>
                <div className="mt-3">
                    <Button
                        size="sm"
                        onClick={refetchAll}
                        className="bg-amber-500 text-black hover:bg-amber-400"
                    >
                        Retry
                    </Button>
                </div>
            </Alert>
        );
    }

    const ctx: Ctx = {
        data: {
            slug,
            user: userQ.user,
            educations: eduQ.educations,
            projects: projQ.projects,
            experiences: expQ.experiences, // ⬅️ NEW
        },
        states: {
            user: {
                isLoading: false,
                isError: false,
                error: undefined,
                refetch: userQ.refetch,
            },
            educations: {
                isLoading: false,
                isError: false,
                error: undefined,
                refetch: eduQ.refetch,
            },
            projects: {
                isLoading: false,
                isError: false,
                error: undefined,
                refetch: projQ.refetch,
            },
            experiences: {
                isLoading: false,
                isError: false,
                error: undefined,
                refetch: expQ.refetch,
            }, // ⬅️ NEW
        },
    };

    return (
        <TemplateDataContext.Provider value={ctx}>
            {children}
        </TemplateDataContext.Provider>
    );
}
