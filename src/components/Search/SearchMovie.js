/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLocation } from "react-router-dom";
import {Form,Input,FormButton,SearchAlt } from "./SearchMovie.styled"



const SearchMovie = ({ onSubmit }) => {
    const location = useLocation();

    const [searchMovie, setSearchMovie] = useState('');
   

    const handleChange =event=>{
        const normalizeValue = event.currentTarget.value.toLowerCase();
        setSearchMovie(normalizeValue);
      };
   

    const handleSubmit=event=>{
    
        event.preventDefault();
        if (searchMovie.trim() === '') {
            return alert('Enter a search name');
          }
          onSubmit(searchMovie);
          setSearchMovie('');
        };
      

    return(

        <Form onSubmit={handleSubmit} >
        <Input 
        type="text"
        autoComplete="off"
        placeholder="Search movie"
        value={searchMovie}
        onChange={handleChange} />
        <FormButton type="submit"> <SearchAlt/></FormButton>
        </Form>
     
     )
    
}

export default SearchMovie;

