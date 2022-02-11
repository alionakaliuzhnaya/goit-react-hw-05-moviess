import styled from 'styled-components';
import {BiSearchAlt} from 'react-icons/bi';



export const Form=styled.form` display: flex;
justify-content: center;
align-items: center;
padding: 8px;
margin-bottom: 10px;
margin-top: 10px;
`
 

export const Input =styled.input`
display: inline-block;
width: 400px;
height: 30px;
font: inherit;
font-size: 20px;
outline: none;
padding-left: 4px;
padding-right: 4px;
border-color: #D8BFD8;
;` 


export const FormButton =styled.button`
 
background-color: #E6E6FA;
border-color: #D8BFD8;
display: inline-block;
height: 37px;
border: 0;

background-size: 40%;
background-repeat: no-repeat;
background-position: center;
opacity: 0.6;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
outline: none;;`
 

export const SearchAlt = styled(BiSearchAlt)`
width:40px;
heigth:40px`