import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Todo } from '../../interface/Types'


export const serverApi = createApi({

    reducerPath: 'serverApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3303/' }),
    tagTypes: ['Todo'],
    endpoints: (builder) => ({
        getData: builder.query<Todo[], void>({
            query: () => 'data',
            providesTags: ['Todo']
        }),

        createPost: builder.mutation({
            query: ({ text, id }) => ({
                url: 'data',
                method: 'POST',
                body: { id, text }
            }),
            invalidatesTags: ['Todo']
        }),

        deletePost: builder.mutation<void, number>({
            query: (id) => ({
                url: `data/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Todo']
        }),


    })
})

export const { useGetDataQuery, useCreatePostMutation, useDeletePostMutation } = serverApi