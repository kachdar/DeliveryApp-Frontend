import { apiSlice } from './apiSlice';
import { ORDERS_URL } from '../constants';

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order, token) => ({
        url: ORDERS_URL,
        method: 'POST',
        body: (order, token),
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = ordersApiSlice;
