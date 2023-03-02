/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiBooks = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sle5k5rybdX7Os5bLujA/books';

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

export const deleteBookAPI = createAsyncThunk(
  'books/removeBookFromAPI',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${apiBooks}/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
    [addBookApi.pending]: (state) => {
      state.loading = true;
    },
    [addBookApi.fulfilled]: (state) => {
      state.loading = false;
    },
    [addBookApi.rejected]: (state) => {
      state.loading = false;
    },
    [deleteBookAPI.pending]: (state) => {
      state.ifSucceed = false;
    },
    [deleteBookAPI.fulfilled]: (state) => {
      state.ifSucceed = true;
    },
    [deleteBookAPI.rejected]: (state) => {
      state.ifSucceed = false;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
