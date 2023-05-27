import { createSlice } from '@reduxjs/toolkit';
import { updateCart } from '../utils/cartUtils';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [], activeShopId: 10, totalAmount: 0 };

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
    increaseItemQuantity: (state, action) => {
      const itemId = action.payload;

      state.cartItems = state.cartItems.map((x) =>
        x.id === itemId ? { ...x, qty: ++x.qty } : x
      );

      return updateCart(state);
    },
    decreaseItemQuantity: (state, action) => {
      const itemId = action.payload;

      const existItem = state.cartItems.find((x) => x.id === itemId);

      if (existItem.qty > 1) {
        state.cartItems = state.cartItems.map((x) =>
          x.id === itemId ? { ...x, qty: --x.qty } : x
        );
      }
      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
      return updateCart(state);
    },
    clearCartItems: (state, action) => {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
      state.activeShopId = 10;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const {
  addToCart,
  changeActiveShop,
  increaseItemQuantity,
  decreaseItemQuantity,
  removeFromCart,
  clearCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
