import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { colorsReducer } from "./slices/colors";

const store = configureStore({
  reducer: {
    auth: authReducer,
    colors: colorsReducer,
  },
});

export default store;
