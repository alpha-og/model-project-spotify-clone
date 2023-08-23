import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
interface userState {
    user: string;
    page: string;
}
const initialState: userState = {
    user: "",
    page: "Home",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<string>) => {
            state.page = action.payload;
        },
    },
});

// useSelector selection functions to retrieve data from the user slice in the redux store
export const selectPage = (state: RootState) => state.userReducer.page;
export const selectUser = (state: RootState) => state.userReducer.user;

export const { setPage } = userSlice.actions;
export default userSlice.reducer;
