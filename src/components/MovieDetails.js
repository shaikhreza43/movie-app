import React, { useEffect } from 'react';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadSelectedMovieOrShowAsync } from '../redux/movieSlice';

export default function MovieDetails(props) {

    const dispatch = useDispatch();
    const selectedMovieOrShow = useSelector(state => state.movies.selectedMovieOrShow);

    const { imdbId } = useParams();

    useEffect(() => {

        dispatch(loadSelectedMovieOrShowAsync({ imdbId }));
    }, [dispatch, imdbId]);

    return (
        <div>
            <div className="container-fluid">
                <div className="row my-4">
                    <div className="col-lg-7 col-md-6 col-sm-6">
                        <h3>{selectedMovieOrShow.Title}</h3>
                        <h5>Date of Released:</h5> <h6>{selectedMovieOrShow.Released}</h6>
                        <h5>Duration :</h5> <h6>{selectedMovieOrShow.Runtime}</h6>
                        <h5>Genre:</h5> <h6>{selectedMovieOrShow.Genre}</h6>
                        <h5> Director:</h5> <h6>{selectedMovieOrShow.Director}</h6>
                        <h5> Writer:</h5> <h6>{selectedMovieOrShow.Writer}</h6>
                        <h5>Actors:</h5> <h6>{selectedMovieOrShow.Actors}</h6>
                        <h5>Language: </h5><h6>{selectedMovieOrShow.Language}</h6>
                        <h5>IMDb Rating:</h5> <h6>{selectedMovieOrShow.imdbRating}</h6>
                        <h5>IMDb Votes: </h5><h6>{selectedMovieOrShow.imdbVotes}</h6>
                        <h5>BoxOffice Collection: </h5><h6>{selectedMovieOrShow.BoxOffice}</h6>
                        <p style={{ textAlign: 'justify' }}>{selectedMovieOrShow.Plot}</p>
                    </div>
                    <div className="col-lg-2 col-md-1 col-sm-1 col-1">

                    </div>
                    <div className="col-lg-3 col-sm-4 col-md-4 col-3">
                        <div className="movie-show-poster">
                            <img style={{ width: '15rem' }} src={selectedMovieOrShow.Poster} alt={selectedMovieOrShow.Title}></img>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
