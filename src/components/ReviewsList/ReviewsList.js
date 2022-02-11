 
 import propTypes from "prop-types";
 import { nanoid } from "nanoid";
 import { ListReviews } from "../CastList/CastList.styled";
 
 const ReviewsList =({reviews})=>{
   return (
      <>
    {reviews?.length > 0 ? (
  <ListReviews>
{reviews.map(({author,id,content})=>{
     return(           
   <li key={nanoid()}>
   <p> Author: {author}</p>
   <p>{content}</p>
   </li>
   );
})}
</ListReviews> 
): (
<p>"We don`t have any review for this movie" </p>
)} 
</>)
 }

 export default ReviewsList;


 ReviewsList.propTypes={
    reviews:propTypes.arrayOf(
        propTypes.shape({
            
            author:propTypes.string,
            content:propTypes.string,
        }).isRequired
    )
};