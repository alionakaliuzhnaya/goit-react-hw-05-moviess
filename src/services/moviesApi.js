
//import axios from 'axios';
const BASE_URL ="https://api.themoviedb.org/3/"
const API_KEY="0dc1b7672e27ccf3c49c2486e3f06114";

async function fetchWithErrorHandling(url = '', config = {}) {
  console.log(url)
    const response = await fetch(url, config);
    return response.ok
      ? await response.json()
      : Promise.reject(new Error('Not found'));
  }
  
  export function fetchTrending() {
    return fetchWithErrorHandling(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  }

  
  export function fetchSearchMovie(searchQuery) {
   console.log(searchQuery)
   return fetchWithErrorHandling(`${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`);
    
  }


 export function fetchMovieById(movieId) {
  console.log(movieId)
  return fetchWithErrorHandling(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`);
 }
  
  export function fetchActors(movieId) {
    return fetchWithErrorHandling(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
  }

  export function fetchReviews(movieId) {
    return fetchWithErrorHandling(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  }

  
  