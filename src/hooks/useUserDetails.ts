'use client';
import * as React from 'react';
import { useGetUserDetailsBySlugQuery } from '@/redux/userdetails/userdetailsApi';

export function useUserDetails(slug?: string, opts?: { enabled?: boolean }) {
    const enabled = !!slug && (opts?.enabled ?? true);

    const q = useGetUserDetailsBySlugQuery(slug as string, {
        skip: !enabled,
    });

    const refetch = React.useCallback(() => {
        if (enabled) void q.refetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enabled, q.refetch]);

    return {
        user: enabled ? (q.data ?? null) : null,
        isLoading: enabled ? q.isLoading : false,
        isError: enabled ? q.isError : false,
        error: enabled ? q.error : undefined,
        refetch, // () => void
    };
}
