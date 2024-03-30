import { createSlice } from "@reduxjs/toolkit";

const getFromStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || initialState;
}

const initialState = {
  cartItems: [],
  itemsInCart: 0,
  cartTotal: 0,
  tax: 0,
  shipping: 0,
  orderTotal: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: getFromStorage(),
  reducers: {
    addItem: (state, action) => {
      const newProduct = action.payload;
      const item = state.cartItems.find((i) => i.cartID === newProduct.cartID)

      if (item) {
        item.amount += newProduct.amount;
      } else {
        state.cartItems.push(newProduct);
      }
      state.itemsInCart += newProduct.amount;
      state.cartTotal += (newProduct.price * newProduct.amount)
      cartSlice.caseReducers.computeTotals(state);
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((product) => product.cartID === id);
      state.itemsInCart = state.itemsInCart - item.amount;
      state.cartTotal -= (item.price * item.amount)
      state.cartItems = state.cartItems.filter((item) => item.cartID !== id)
      cartSlice.caseReducers.computeTotals(state)
    },
    computeTotals: (state) => {
      state.tax = state.cartTotal * 0.2;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem('cart', JSON.stringify(state))
    },
    editItem: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((product) => product.cartID === id);
      state.itemsInCart += (quantity - item.amount);
      state.cartTotal += item.price * (quantity - item.amount)
      item.amount = quantity;
      cartSlice.caseReducers.computeTotals(state)
    },
    clearCart: () => {
      localStorage.setItem('cart', JSON
        .stringify(initialState))
      return initialState;
    }

  }
})
export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;