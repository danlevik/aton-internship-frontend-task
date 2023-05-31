import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchColors = createAsyncThunk(
  "colors/fetchColors",
  async (page = 1) => {
    const { data } = await axios.get(`/colors?per_page=4&page=${page}`);
    return data;
  }
);

const initialState = {
  colors: {
    items: [],
    status: "loading",
  },
};

const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {},
  extraReducers: {
    // получение данных о цветах
    [fetchColors.pending]: (state) => {
      state.colors.items = [];
      state.colors.status = "loading";
    },
    [fetchColors.fulfilled]: (state, action) => {
      state.colors.items = action.payload;
      state.colors.status = "loaded";
    },
    [fetchColors.rejected]: (state) => {
      state.colors.items = [];
      state.colors.status = "error";
    },
  },
});

export const colorsReducer = colorsSlice.reducer;
