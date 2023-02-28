import { createSlice } from '@reduxjs/toolkit';
import booksArray2 from '../booksArr';

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    booksArray: booksArray2,
  },
  reducers: {
    addBook: (state, action) => {
      state.booksArray.push(action.payload);
    },
    removeBook: (state, action) => {
      state.booksArray.filter(
        (book) => book !== action.payload,
      );
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
