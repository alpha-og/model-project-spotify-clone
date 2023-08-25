import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface ContentSlice {
    featuredPlaylists: Array<object>;
}

const initialState: ContentSlice = {
    featuredPlaylists: [],
};

const contentSlice = createSlice({
    name: "content",
    initialState,
    reducers: {
        pushFeaturedPlaylist: (state, action: PayloadAction<object>) => {
            state.featuredPlaylists.push(action.payload);
        },
    },
});

export const selectFeaturedPlaylists = (state: RootState) =>
    state.contentReducer.featuredPlaylists;

export const { pushFeaturedPlaylist } = contentSlice.actions;
export default contentSlice.reducer;
