import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';
import movieReducer from '../slices/moviesSlice';
import GptSlice from '../slices/GptSlice';
import configSlice from '../slices/configSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt:GptSlice,
    config:configSlice
  
  },
});

export default store;
