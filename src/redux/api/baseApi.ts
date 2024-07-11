// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
        query: () => ({
            method : "GET",
            url : "/products",
        }),
      }),

    createProduct: builder.mutation({
        query: (data) => ({
            method : "POST",
            url : "/products/create-product",
            body : data,
        }),
      }),
  }),
})

export const { useGetAllProductsQuery, useCreateProductMutation } = baseApi;