import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./contentSlice";
import userReducer from "./userSlice";

const store = configureStore({
    reducer: { userReducer, contentReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
