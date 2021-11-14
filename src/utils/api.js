import axios from 'axios';

export const movieApi = axios.create({
    baseURL: 'http://www.omdbapi.com/?i=tt3896198&apikey=7db14e37&s=avengers&type=movie'
});

export const api = axios.create({
    baseURL: ''
});