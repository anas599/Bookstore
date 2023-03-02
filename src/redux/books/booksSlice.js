/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const apiBooks = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zpVDBnBpLThUE35BUZY9/books';

export const getBooksArr = createAsyncThunk(
  'books/getBooksArr',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(apiBooks);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error...');
    }
  },
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${apiBooks}/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue('Book does not exist');
    }
  },
);

export const addBookApi = createAsyncThunk(
  'books/addBook',
  async (book, thunkAPI) => {
    try {
      const response = await axios.post(apiBooks, book);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Error...');
    }
  },
);

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    booksArray: [],
    loading: false,
  },
  extraReducers: {
    [getBooksArr.pending]: (state) => {
      state.loading = true;
    },
    [getBooksArr.fulfilled]: (state, action) => {
      state.loading = false;
      state.booksArray = action.payload;
    },
    [getBooksArr.rejected]: (state) => {
      state.loading = false;
    },
    [deleteBook.fulfilled]: (state, action) => {
      state.booksArray = state.booksArray.filter(
        (book) => book.item_id !== action.payload,
      );
    },
    [addBookApi.fulfilled]: (state, action) => {
      state.booksArray.push(action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
