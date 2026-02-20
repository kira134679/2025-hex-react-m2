import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../src/slice/authSlice';
import cartReducer from '../src/slice/cartSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});

export default store;
