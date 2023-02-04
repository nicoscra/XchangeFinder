import { createSlice } from "@reduxjs/toolkit";

const favroitesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    toggleFavorite: (favorites, action) => {
      if (favorites.includes(action.payload)) {
        return favorites.filter((favroite) => favroite !== action.payload);
      } else {
        favorites.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favroitesSlice.actions;
export const favoritesReducer = favroitesSlice.reducer;
