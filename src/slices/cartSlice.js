import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [], activeShopId: 10, totalAmount: 0};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.id === item.id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.id === existItem.id ? item : x
        );
      } else {
        state.activeShopId = item.shop.id;
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state, item);
    },
    changeActiveShop: (state, action) => {
      state.activeShopId = action.payload;
    },
  },
});

export const { addToCart, changeActiveShop } = cartSlice.actions;

export default cartSlice.reducer;
