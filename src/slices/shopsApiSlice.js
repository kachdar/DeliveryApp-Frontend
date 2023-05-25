import { apiSlice } from './apiSlice';
import { PRODUCTS_URL, SHOPS_URL } from '../constants';

export const shopsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getShops: builder.query({
      query: () => ({
        url: `${SHOPS_URL}`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Shops'],
    }),
    getProductsByShopId: builder.query({
      query: (shopId) => ({
        url: `${SHOPS_URL}/${shopId}/${PRODUCTS_URL}`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Products'],
    }),
  }),
});

export const { useGetShopsQuery, useGetProductsByShopIdQuery } = shopsApiSlice;
