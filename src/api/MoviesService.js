import axios from "axios";

const API_KEY = '53d763b5d2bc63b63e7ac4407a77d232';
const BASE_URL = 'https://api.themoviedb.org/3/';

const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
    static getMovies() {
        return axios.get(withBaseUrl('movie/popular'));
    }

    static getMovieById(id) {
        return axios.get(withBaseUrl(`movie/${id}`));
    }
}