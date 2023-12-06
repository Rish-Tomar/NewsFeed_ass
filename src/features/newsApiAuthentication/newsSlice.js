import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchNews } from "./newApi.js";



const initialState = {
 news:null
};


export const fetchNewsAsync = createAsyncThunk(
  'news/fetchNews',
  async () => {
    const response = await fetchNews();
    return response.data;
  }
);

export const newsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNewsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.news= action.payload;
      });
  },
});

export const selectNews =(state) => state.news

export default newsSlice.reducer;
