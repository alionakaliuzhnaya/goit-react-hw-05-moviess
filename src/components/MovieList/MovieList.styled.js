import styled from 'styled-components';
import {NavLink } from "react-router-dom"
  
export const MoviesList =styled.ul`
display: flex;
flex-direction: column;
list-style: none;
align-items: flex-start;`


export const Link=styled(NavLink)`

&.active,
&:hover {
    color: #D8BFD8;}
`
