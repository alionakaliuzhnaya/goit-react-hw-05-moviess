import { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import { fetchTrending } from '../services/moviesApi';
import { TailSpin } from  'react-loader-spinner'
import { MoviesList,Link } from '../components/MovieList/MovieList.styled';

function HomePage() {

  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState("idle")

  useEffect(() => {
    setStatus("pending")
    fetchTrending()
   .then(({results})=> {setMovies(results);
      setStatus("resolved");
    })
   .catch(error=>{console.log(error)
   setStatus("rejected")
  }) }, []);

  return (
    <>
     

    <h1>Trending today</h1>
    {status ==="pending"&& (
      <TailSpin
      heigth="100"
      width="100"
      color='grey'
      ariaLabel='loading'
    />
    )}
    {status==="resolved" && (
        <MoviesList>
            {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
            </li>
          ))}

        </MoviesList>
    )}
        {status ==="rejected" && <h1>Oppps,something's gone wrong</h1>}
     
    </>
  );
}

export default HomePage;