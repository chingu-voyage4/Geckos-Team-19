import styled from 'styled-components';
import img from './default-image/image-7.jpg';



const AppWrap = styled.div `
display:flex;
flex-direction:column;
width:100%;
height:100vh;
`

let randomNumber = Math.floor(Math.random()*22) + 1;


const Background = styled.div`
width:100%;
height:100%;
margin:auto;

//background-image: url(${img});
// background-image: url(${props => props.image})
background-image: url(${require("../styles/default-image/image-"+ randomNumber + ".jpg")});
background-size:cover;
background-attachment: fixed;
background-repeat: no-repeat;
background-position: center;
display: block;
overflow: auto;

`;


export {AppWrap, Background};