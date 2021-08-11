import styled from 'styled-components';
import img from './default-image/image-5.jpg';
import { keyframes } from 'styled-components';


const fadeIn = keyframes `
0%{
    opacity: 0;
}

20%{
    opacity:0;
}
100% {
    opacity: 1;
}
`

const AppWrap = styled.div `
display:flex;
flex-direction:column;
width:100vw;
height:100vh;
// border:1px red solid;

`

function randomNumber() {
     let num = Math.floor(Math.random()*24) + 1;
     //fix for default background not appearing on refresh
     if(num === 7 || num === 21){
         num = num + 1
     }
     return num;
}

const Background = styled.div`
animation: ${fadeIn} 2s linear;
position:absolute;
top:0;
left:0;
right:0;
bottom:0;
margin:auto;
background-image: url(${img});
background-size:cover;
background-attachment: fixed;
background-repeat: no-repeat;
background-position: bottom center;
background-size: cover;
display: block;
overflow: auto;

`







export {AppWrap, Background};