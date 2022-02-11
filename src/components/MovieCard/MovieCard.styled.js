import styled from 'styled-components';
import {NavLink } from "react-router-dom"


export const ButtonCard=styled.button`
background-color: #E6E6FA;
 
    padding-top: 10px;
    padding-right: 30px;
    padding-bottom: 10px;
    padding-left: 30px;
    border-radius: 4px;
    border: none;
    margin-bottom: 10px;
    cursor: pointer;
}`

export const ImageCard =styled.img`margin-right: 32px;
margin-bottom: 0;
min-width: 240px;
border-radius: 5px;`

export const CardContainer=styled.div`
display: flex;
  padding-bottom: 10px;
  border-bottom: 3px double #D8BFD8;
`
export const CardDescription=styled.div`
padding-left: 20px;`

export const Genres =styled.p`
    font-weight: 700;
    font-size: 17px;
    margin-bottom: 10px;
  `
  
  export const GenresName=styled.span`
  &:not(:last-child) {
    margin-right: 10px;}
  `


  export const AddList=styled.ul`
  border-bottom: 3px double #D8BFD8;
  padding-bottom:10px
  &:focus,
  &:hover{
  color: #D8BFD8;}
  `
  export const Link=styled(NavLink)`

&.active,
&:hover {
    color: #D8BFD8;}
`
