import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import catReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    Categories: catReducer,
  },
});
export default store;
