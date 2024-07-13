// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  tagTypes: ["products", "cart", "order"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
        query: () => ({
            method : "GET",
            url : "/products",
        }),
        providesTags : ["products"]
      }),

    createProduct: builder.mutation({
        query: (data) => ({
            method : "POST",
            url : "/products/create-product",
            body : data,
        }),
        invalidatesTags : ["products"]
      }),

      updateProduct: builder.mutation({
        query: ({ id, data }) => ({
          method: "PUT",
          url: `/products/update-product/${id}`,
          body: data,
        }),
        invalidatesTags: ["products"],
      }),

      deleteProduct: builder.mutation({
        query: (id) => ({
          method: "DELETE",
          url: `/products/delete-product/${id}`,
        }),
        invalidatesTags: ["products"],
      }),


      createCartProduct: builder.mutation({
        query: (data) => ({
            method : "POST",
            url : "/cart/post-on-cart",
            body : data,
        }),
        invalidatesTags : ["cart"]
      }),


      getAllCartProducts: builder.query({
        query: () => ({
            method : "GET",
            url : "/cart",
        }),
        providesTags : ["cart"]
      }),

      deleteCartProduct: builder.mutation({
        query: (id) => ({
          method: "DELETE",
          url: `/cart/delete-cart-product/${id}`,
        }),
        invalidatesTags: ["cart"],
      }),

      updateCartProduct: builder.mutation({
        query: ({ id, quantity }) => {
          console.log(id, quantity);
          return {
            method: "PUT",
            url: `/cart/update-cart-product/${id}`,
            body: { quantity },
          };
        },
        invalidatesTags: ["cart"],
      }),

      createOrder: builder.mutation({
        query: (data) => ({
            method : "POST",
            url : "/orders/create-order",
            body : data,
        }),
        invalidatesTags: ["cart", "order"],
      }),

      getAllOrders: builder.query({
        query: () => ({
            method : "GET",
            url : "/orders",
        }),
        providesTags : ["order"]
      }),

  }),
});

export const { useGetAllProductsQuery, useCreateProductMutation, useUpdateProductMutation, useDeleteProductMutation, useGetAllCartProductsQuery, useDeleteCartProductMutation, useCreateCartProductMutation, useUpdateCartProductMutation, useCreateOrderMutation, useGetAllOrdersQuery } = baseApi;