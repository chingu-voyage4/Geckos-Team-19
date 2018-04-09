import styled from 'styled-components';
import img from './default-image/default-image.jpg';


const AppWrap = styled.div `
display:flex;
flex-direction:column;
// justify-content:space-around;
// justify-items:space-around;
// border:1px red solid;
width:100%;
height:100vh;
`



const Background = styled.div`
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

`;


export {AppWrap, Background};