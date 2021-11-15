import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { movieApi } from '../utils/api';
import axios from 'axios';

export const loadMoviesAsync = createAsyncThunk("movies/loadMoviesAsync", async () => {
    const response = await movieApi.get("");
    if (response.status === 200) {
        return response.data;
    }
});

export const loadShowsAsync = createAsyncThunk("shows/loadShowsAsync", async () => {
    const response = await axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=7db14e37&s=friends&type=series");
    if (response.status === 200) {
        return response.data;
    }
});

export const searchMovieAsync = createAsyncThunk("movies/searchMovieAsync", async (payload) => {
    const response = await axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=7db14e37&s=" + payload.searchText + "&type=movie");
    if (response.status === 200)
        return response.data;
});

export const searchShowAsync = createAsyncThunk("shows/searchShowAsync", async (payload) => {
    const response = await axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=7db14e37&s=" + payload.showSearchText + "&type=series");
    if (response.status === 200)
        return response.data;
});

const movieSlice = createSlice({
    name: "movies",
    initialState: { movies: {}, shows: {} },
    reducers: {
        loadMovies: (state, action) => {
            state.movies = action.payload;
        }
    },
    extraReducers: {
        [loadMoviesAsync.pending]: () => {
            console.log("Fetching Movies...");
        },
        [loadMoviesAsync.fulfilled]: (state, action) => {
            console.log("Fetched Movies Successfully.");
            state.movies = action.payload;
        },
        [loadMoviesAsync.rejected]: () => {
            console.log("Request Got Rejected...");
        },
        [loadShowsAsync.pending]: () => {
            console.log("Fetching Shows...");
        },
        [loadShowsAsync.fulfilled]: (state, action) => {
            console.log("Fetched Shows Successfully.");
            state.shows = action.payload;
        },
        [loadShowsAsync.rejected]: () => {
            console.log("Request Got Rejected...");
        },
        [searchMovieAsync.pending]: () => {
            console.log("Searching Movie...");
        },
        [searchMovieAsync.fulfilled]: (state, action) => {
            console.log("Movie Search Completed...");
            state.movies = action.payload;
        },
        [searchMovieAsync.rejected]: () => {
            console.log("Movie Search Rejected...");
        },
        [searchShowAsync.pending]: () => {
            console.log("Searching Show...");
        },
        [searchShowAsync.fulfilled]: (state, action) => {
            console.log("Show Search Completed...");
            state.shows = action.payload;
        },
        [searchShowAsync.rejected]: () => {
            console.log("Show Search Rejected...");
        }
    }
});

export const { loadMovies } = movieSlice.actions;

export default movieSlice.reducer;