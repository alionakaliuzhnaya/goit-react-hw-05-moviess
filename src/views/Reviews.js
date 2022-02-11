import { useParams } from "react-router-dom"
import { useEffect, useState } from "react/cjs/react.development";
import ReviewsList from "../components/ReviewsList/ReviewsList.js";
import { fetchReviews } from "../services/moviesApi";

 const Reviews=()=>{
     const {movieId}=useParams();
     const [reviews,SetReviews]=useState([]);

     useEffect(()=>{
     fetchReviews(movieId)
     .then(({results})=>SetReviews(results))
     .catch(error => console.log(error));
     
 }, [movieId]);
 return(
    <> 
    <ReviewsList reviews={reviews}/>
    </>
 );

 }

 export default Reviews;