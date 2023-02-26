import { createSlice } from '@reduxjs/toolkit';

const categoriesArray = [];

export const categoriesSlice = createSlice([
  {
    reducers: {
      checkStatus() { categoriesArray.push('Under construction'); },
    },
  },
]);
export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice;
