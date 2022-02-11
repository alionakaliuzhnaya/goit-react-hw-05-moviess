import propTypes from "prop-types";
import { CastImg,ListCast, CastItem,CharacterData} from "./CastList.styled";

  const CastList =({cast})=>{
      return (<>
      {cast?.length>0 ? (
          <ListCast>
              {cast.map(({id,profile_path,name,character})=>{
                  return(
                  
                      <CastItem key={id}>
                          <CastImg src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                           alt="{name}" />
                      <p>{name}</p>
                      <CharacterData> Character:{character} </CharacterData>
                      </CastItem>
                      
                  );
              })}
          </ListCast>
      ): (<p>"We don`t have any cast for this movie"
      </p>)}
      </>
      )
  }

  export default CastList;

CastList.propTypes={
    cast:propTypes.arrayOf(
        propTypes.shape({
            id:propTypes.number.isRequired,
            profile_path:propTypes.string,
            name:propTypes.string,
            character:propTypes.string,
        }).isRequired
    )
};