'use client';
import * as React from 'react';
import { useGetExperiencesBySlugQuery } from '@/redux/experience/experienceApi';

export function useExperience(slug?: string, opts?: { enabled?: boolean }) {
    const enabled = !!slug && (opts?.enabled ?? true);

    const q = useGetExperiencesBySlugQuery(slug as string, { skip: !enabled });

    const refetch = React.useCallback(() => {
        if (enabled) void q.refetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enabled, q.refetch]);

    const experiences = enabled ? (q.data ?? []) : [];

    return {
        experiences,
        isLoading: enabled ? q.isLoading : false,
        isError: enabled ? q.isError : false,
        error: enabled ? q.error : undefined,
        refetch, // () => void
    };
}
