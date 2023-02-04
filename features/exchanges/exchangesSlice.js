import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

export const fetchExchanges = createAsyncThunk(
  "exchanges/fetchExchanges",
  async () => {
    const response = await fetch(baseUrl + "exchanges");
    if (!response.ok) {
      return Promise.reject("Unable to fetch, status: " + response.status);
    }
    const data = await response.json();
    return data;
  }
);

const exchangesSlice = createSlice({
  name: "exchanges",
  initialState: { isLoading: true, errMess: null, exchangesArray: [] },
  reducers: {},
  extraReducers: {
    [fetchExchanges.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchExchanges.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.exchangesArray = action.payload;
    },
    [fetchExchanges.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const exchangesReducer = exchangesSlice.reducer;
