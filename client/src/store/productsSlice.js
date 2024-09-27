import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./actionCreators";

const initialState = {
  status: "IDLE",
  products: [],
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "PENDING";
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "SUCCESS";
        state.products = action.payload;
        state.error = null;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "FAILED";
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
