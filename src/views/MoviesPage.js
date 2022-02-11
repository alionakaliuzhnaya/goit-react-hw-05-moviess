
import { useState, useEffect } from "react";
import {  useLocation, useSearchParams } from "react-router-dom";
import { fetchSearchMovie } from "../services/moviesApi";
import SearchMovie from "../components/Search/SearchMovie";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";



const MoviesPage = () => {
  const [search, setSearch] = useSearchParams();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [movies,setMovies]= useState([])
 

  const location = useLocation();
  const query = search.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    setStatus("pending");

    fetchSearchMovie(query)
    .then(movies => {
      setMovies(prevMovies => [...prevMovies, ...movies.results]);
          setStatus("resolved");
        })
      .catch((error) => {setError(error);
         setStatus("rejected");
  });}, [query]);



  const handleSubmit= searchMovies => {
    setSearch(`?query=${searchMovies}`);}
  
  return (
    <>
    <SearchMovie onSubmit={handleSubmit}/>
   
      {status === "pending" && (
        <Loader/>
      )}
       {status === "rejected" && <h1>{error && error.message} </h1>}
      {status === "resolved" &&  (
      <MovieList movies={movies} locationFrom={location}/>
      )}
     
    </>
  );
};

export default MoviesPage;