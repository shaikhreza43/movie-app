import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: { movies: {} },
    reducers: {
        loadMovies: (state, action) => {
            state.movies = action.payload;
        }
    }
});

export const { loadMovies } = movieSlice.actions;

export default movieSlice.reducer;