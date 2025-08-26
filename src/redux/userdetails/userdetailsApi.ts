import { apiSlice } from '../apiSlice';
import {
    UserDetails,
    UserDetailsInput,
    UserDetailsResponse,
} from './userdetailsTypes';

export const userDetailsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUserDetailsBySlug: builder.query<UserDetails | null, string>({
            query: (slug) => ({
                url: `/user-details/slug/${slug}`,
                method: 'GET',
                meta: { skipSuccessToast: true },
            }),
            providesTags: ['UserDetails'],
        }),

        getMyUserDetails: builder.query<UserDetails | null, void>({
            query: () => ({
                url: '/user-details/me',
                method: 'GET',
                meta: { skipSuccessToast: true },
            }),
            providesTags: ['UserDetails'],
        }),

        updateMyUserDetails: builder.mutation<UserDetails, UserDetailsInput>({
            query: (body) => ({
                url: '/user-details',
                method: 'POST',
                body,
            }),
            transformResponse: (resp: UserDetailsResponse) => resp.data,
            invalidatesTags: ['UserDetails'],
        }),
    }),
});

export const {
    useGetUserDetailsBySlugQuery,
    useGetMyUserDetailsQuery,
    useUpdateMyUserDetailsMutation,
} = userDetailsApi;
