import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
        toast.success("Product added to cart", {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, deleteFromCart, clear } = cartSlice.actions;

export default cartSlice.reducer;
