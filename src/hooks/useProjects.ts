'use client';
import * as React from 'react';
import { useGetProjectsBySlugQuery } from '@/redux/projects/projectApi';

export function useProjects(slug?: string, opts?: { enabled?: boolean }) {
    const enabled = !!slug && (opts?.enabled ?? true);

    const q = useGetProjectsBySlugQuery(slug as string, {
        skip: !enabled,
    });

    const refetch = React.useCallback(() => {
        if (enabled) void q.refetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enabled, q.refetch]);

    const projects = enabled ? (q.data ?? []) : [];

    return {
        projects,
        isLoading: enabled ? q.isLoading : false,
        isError: enabled ? q.isError : false,
        error: enabled ? q.error : undefined,
        refetch, // () => void
    };
}
