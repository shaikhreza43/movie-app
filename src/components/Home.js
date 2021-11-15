import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import { movieApi } from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies, loadMoviesAsync, loadShowsAsync, searchMovieAsync, searchShowAsync } from '../redux/movieSlice';

export default function Home(props) {

    const [searchText, setSearchText] = useState('');
    const [showSearchText, setShowSearchText] = useState('');

    const dispatch = useDispatch();

    const movieList = useSelector(state => state.movies.movies);
    const showList = useSelector(state => state.movies.shows);

    useEffect(() => {
        //This is the Synchronous way of doing.
        // const fetchMovieList = async () => {
        //     const response = await movieApi.get("");
        //     if (response.status === 200)
        //         dispatch(loadMovies(response.data));
        // }

        // fetchMovieList();

        //Doing Asynchronously using thunk
        dispatch(loadMoviesAsync());
        dispatch(loadShowsAsync());
    }, [dispatch]);

    const handleMovieSearch = (e) => {
        e.preventDefault();
        if (searchText)
            dispatch(searchMovieAsync({ searchText }));
    }

    const handleShowSearch = (e) => {
        e.preventDefault();
        if (showSearchText)
            dispatch(searchShowAsync({ showSearchText }));
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h2>Movies</h2>
                            <form className="form-inline d-flex mt-3" onSubmit={handleMovieSearch}>
                                <input className="form-control mr-sm-2" value={searchText} onChange={(e) => setSearchText(e.target.value)} type="search" placeholder="Search Movies" aria-label="Search" />
                                <button className="btn btn-outline-success mx-2" type="submit">Search</button>
                            </form>
                        </div>
                        <div className="movie-list-outer-div">

                            {movieList.Response === "True" ?
                                movieList.Search.map((movie, index) => (

                                    <div key={index} className="card" style={{ width: '10rem', height: 'auto', margin: '10px 20px' }}>
                                        <img className="card-img-top" src={movie.Poster} alt={movie.Title} />
                                        <div className="card-body">
                                            <p className="card-text">{movie.Title}</p>
                                        </div>
                                    </div>

                                )) :
                                (<div><h3>{movieList.Error}</h3></div>)}
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h2>TV Shows</h2>
                        <form className="form-inline d-flex mt-3" onSubmit={handleShowSearch}>
                            <input className="form-control mr-sm-2" value={showSearchText} onChange={(e) => setShowSearchText(e.target.value)} type="search" placeholder="Search Shows" aria-label="Search" />
                            <button className="btn btn-outline-success mx-2" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="show-list-outer-div">

                        {showList.Response === "True" ?
                            showList.Search.map((show, index) => (

                                <div key={index} className="card" style={{ width: '10rem', height: 'auto', margin: '10px 20px' }}>
                                    <img className="card-img-top" src={show.Poster} alt={show.Title} />
                                    <div className="card-body">
                                        <p className="card-text">{show.Title}</p>
                                    </div>
                                </div>

                            )) :
                            (<div><h3>{showList.Error}</h3></div>)}
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    )
}
