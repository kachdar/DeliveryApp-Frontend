export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  state.totalPrice = addDecimals(
    state.cartItems.reduce(
      (total, item) => total + Number(item.price) * item.qty,
      0
    )
  );

  state.totalAmount = state.cartItems.reduce(
    (total, item) => total + item.qty,
    0
  )

  localStorage.setItem('cart', JSON.stringify(state));

  return state;
};
