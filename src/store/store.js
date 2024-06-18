import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import movieReducer from '../slices/moviesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer
  },
});

export default store;
