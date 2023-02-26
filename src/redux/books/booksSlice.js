import { createSlice } from '@reduxjs/toolkit';

let booksArray = [];

export const booksSlice = createSlice([{
  reducers: {
    addBook: (state) => {
      booksArray.push(state);
    },
    removeBook: (state, bookName) => {
      booksArray = state.booksArray.filter((x) => x !== bookName);
    },

  },
}]);
export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice;
