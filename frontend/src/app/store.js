import { configureStore } from '@reduxjs/toolkit';
<<<<<<< Updated upstream

export const store = configureStore({
  reducer: {
=======
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer
>>>>>>> Stashed changes
  },
});
