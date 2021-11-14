import React, { useEffect } from 'react';
import Footer from './Footer';
import { movieApi } from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies } from '../redux/movieSlice';

export default function Home(props) {

    const dispatch = useDispatch();

    const movieList = useSelector(state => state.movies.movies);

    useEffect(() => {

        const fetchMovieList = async () => {
            const response = await movieApi.get("");
            if (response.status === 200)
                dispatch(loadMovies(response.data));
        }

        fetchMovieList();
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Movies</h2>
                        <div className="movie-list-outer-div">

                            {movieList.Response === "True" ?
                                movieList.Search.map((movie, index) => (

                                    <div key={index} className="card" style={{ width: '15rem', height: 'auto', margin: '20px 40px' }}>
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

            </div>
            <Footer></Footer>
        </>
    )
}
