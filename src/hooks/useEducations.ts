'use client';
import * as React from 'react';
import { useGetEducationsBySlugQuery } from '@/redux/education/educationApi';

export function useEducations(slug?: string, opts?: { enabled?: boolean }) {
    const enabled = !!slug && (opts?.enabled ?? true);

    const q = useGetEducationsBySlugQuery(slug as string, {
        skip: !enabled,
    });

    const refetch = React.useCallback(() => {
        if (enabled) void q.refetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enabled, q.refetch]);

    return {
        educations: enabled ? (q.data ?? []) : [],
        isLoading: enabled ? q.isLoading : false,
        isError: enabled ? q.isError : false,
        error: enabled ? q.error : undefined,
        refetch, // () => void
    };
}
