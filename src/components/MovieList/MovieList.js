
import propTypes from "prop-types";
import {MoviesList,Link} from "./MovieList.styled"


function MovieList ({movies,locationFrom}){

    return (
        <MoviesList>
     { movies.map(({ id, title }) =>
   title && (
    <li key = {id}>
    <Link to={ `${id}`} state={{ from: {...locationFrom}}}>                
 {title}
    </Link>
  </li> ))}
        </MoviesList>
    )
}

export default MovieList

MovieList.propTypes={
    movies:propTypes.arrayOf(
        propTypes.shape({
            id:propTypes.number.isRequired,
            title:propTypes.string.isRequired,
        }).isRequired
    )
}

