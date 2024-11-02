import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const initialState = {
  products: [],
};

// fetching All the products
export const FetchProducts = createAsyncThunk("products/FetchProducts", async () => {
  const response = await api.get("products");
  return response.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productsSlice.reducer;