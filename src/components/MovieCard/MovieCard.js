import PropTypes from 'prop-types';
import {ImageCard,CardContainer,CardDescription,Genres,GenresName} from "./MovieCard.styled"

 function MovieCard({movie}){
    const {poster_path,
      original_title,
        title,
        release_date,
        vote_average,
        overview,
        genres
      } = movie;

return(
   
  <CardContainer>
  <ImageCard src={`https://image.tmdb.org/t/p/w342${poster_path}`}
    alt={original_title}
  />

  <CardDescription>
  <h2>{title} {release_date ? <>({release_date.slice(0, 4)})</> : ''}</h2>
  <p>User score:{vote_average}</p>
  <h3>Overview</h3>
  <p>{overview}</p>
  <h4>Genres</h4>
  <Genres>{genres&&
  genres.map(({ id, name }) => (
        <GenresName key={id}>{name}</GenresName>
      ))}
    </Genres>
    </CardDescription>

  </CardContainer>
   
)
    }

     export default MovieCard;

     MovieCard.propTypes = {
      movie: PropTypes.shape({
        poster_path: PropTypes.string,
        title: PropTypes.string,
        vote_average: PropTypes.number,
        overview: PropTypes.string,
        genres: PropTypes.array,
      }).isRequired,
    };