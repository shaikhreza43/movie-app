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
            MovieDetails {imdbId}
            <Footer />
        </div>
    )
}
