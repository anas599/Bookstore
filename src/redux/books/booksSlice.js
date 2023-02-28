import { createSlice } from '@reduxjs/toolkit';
import booksArray2 from '../booksArr';

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    booksArray: [...booksArray2],
  },
  reducers: {
    addBook: (state, action) => {
      const {
        title, author, category,
      } = action.payload;
      const newAdd = {
        item_id: `item${state.booksArray.length + 1}`,
        title,
        author,
        category,
      };
      state.booksArray.push(newAdd);
    },
    removeBook: (state, action) => {
      const acp = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.booksArray = state.booksArray.filter(
        (book) => book.item_id !== acp,
      );
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
