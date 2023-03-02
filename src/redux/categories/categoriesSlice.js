import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categoriesArray: [],
  },
  reducers: {
    checkStatus: (state) => {
      state.categoriesArray.push('Under construction');
      state.categoriesArray.join('');
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
