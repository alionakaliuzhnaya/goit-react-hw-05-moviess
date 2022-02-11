import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard/MovieCard';
import {fetchMovieById} from "../services/moviesApi"
import { Outlet } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import { ButtonCard,AddList,Link } from '../components/MovieCard/MovieCard.styled';



const MovieDetailsPage =()=>{
    let { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const [status, setStatus] = useState("idle")
    const location =useLocation();
    const navigate=useNavigate();
    const from = location?.state?.from ?? '/';

    useEffect(() => {

      setStatus("pending")
        fetchMovieById(movieId)
          .then(movie=>{
            setMovie(movie)
          },
            setStatus("resolved")
         
          )
          .catch(error => { console.log(error);
          setStatus("rejected")
      }) }, [movieId]);

  
    return ( 
 <>
  {status ==="pending"&& (
      <Loader/>
    )}
    {status==="resolved" && (
      <>
        <ButtonCard type="button" onClick={()=>{navigate(from)}}>Go back</ButtonCard>
      
           <MovieCard movie={movie}/>
          

<AddList>
          Additional information
          <li>
            <Link to="cast" state={{ from: location?.state?.from ?? "/" }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="review" state={{ from: location?.state?.from ?? "/" }}>
              Reviews
            </Link>
          </li>
        </AddList>

        <Outlet/>
        </>
    )}
{status ==="rejected" && <h1>Oppps,something's gone wrong</h1>}
     </>
    )
}
 

  export default MovieDetailsPage;

