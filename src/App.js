
import './App.styled.js';
import Appbar from './components/Appbar/AppBar';
import Container from './components/Container/Container';
import {Routes,Route} from "react-router-dom";
import { lazy,Suspense } from 'react';


const HomePage =lazy(()=>
import("./views/HomePage"));

const MoviesPage=lazy(()=>
import("./views/MoviesPage"));

const MovieDetailsPage=lazy(()=>
import("./views/MovieDetailsPage"));

const Cast=lazy(()=>
import("./views/Cast"));

const Reviews=lazy(()=>
import("./views/Reviews"));


function App() {
  return (
<Container>
  <Appbar/>
   <Routes>
     <Route path="/" element={<Suspense fallback=""><HomePage /></Suspense>} />
      <Route  path="/movies" element={<Suspense fallback=""><MoviesPage /></Suspense>}/>
      <Route path ="/movies/:movieId" element={<Suspense fallback=""><MovieDetailsPage /></Suspense>}>
      <Route  path="cast" element ={<Suspense fallback=""><Cast/></Suspense>}/>
        <Route path ="review" element ={<Suspense fallback=""> <Reviews/> </Suspense>}/>
        <Route path="*" element={<Suspense fallback=""><HomePage /> {" "} </Suspense>} />
       </Route>
       
   </Routes>
 
   </Container>
  );
}

export default App;


