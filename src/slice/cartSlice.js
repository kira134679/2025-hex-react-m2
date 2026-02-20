import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { guestCartApi } from '../api/cart';
import { build } from 'vite';

export const addToCart = createAsyncThunk('cart/addToCart', async (data, { rejectWithValue }) => {
  try {
    return await guestCartApi.addToCart(data);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getCart = createAsyncThunk('cart/getCart', async (_, { rejectWithValue }) => {
  try {
    return await guestCartApi.getCart();
  } catch (error) {
    return rejectWithValue(error);
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartList: [],
  },
  reducers: {},
  // extraReducers: builder => {
  //   builder.addCase(getCart.fulfilled, (state, { payload }) => {
  //     console.log('slice', payload);
  //     // state.cartList = payload.carts;
  //   });
  //   builder.addCase(getCart.rejected, (state, { payload }) => {
  //     //
  //   });
  // },
});

export const selectCartList = state => state.cart.cartList;

export default cartSlice.reducer;
