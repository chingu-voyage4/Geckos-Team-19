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
position:absolute;
top:0;
left:0;
right:0;
bottom:0;
margin:auto;

//background-image: url(${img});
// background-image: url(${props => props.image})
background-image: url(${require("../styles/default-image/image-"+ randomNumber + ".jpg")});
background-size:cover;
<<<<<<< HEAD
background-attachment: fixed;
background-repeat: no-repeat;
background-position: center;
display: block;
=======
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;
    display: block;
>>>>>>> 1f7bacbf384ccc930df760894d5e0ca17d2dca36
overflow: auto;

`;


export {AppWrap, Background};