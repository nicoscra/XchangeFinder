import { configureStore } from "@reduxjs/toolkit";
import { exchangesReducer } from "../features/exchanges/exchangesSlice";
import { commentsReducer } from "../features/comments/commentsSlice";
import { partnersReducer } from "../features/partners/partnersSlice";
import { promotionsReducer } from "../features/promotions/promotionsSlice";
import { favoritesReducer } from "../favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    exchanges: exchangesReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionsReducer,
    favorites: favoritesReducer,
  },
});
