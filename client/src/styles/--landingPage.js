import styled from 'styled-components';
import img from '../styles/default-image/image-6.jpg';
import Particles from 'react-particles-js';

const PageWrap = styled.div`
display:flex;
flex-direction:column;
//  border:1px red solid;
align-items:left
height:100vh;
justify-content:center;
align-items:center;
`

const Methodize = styled.div `
color:white;
letter-spacing:1.3rem;
font-size:58px;
font-family:"Helvetica";
opacity:.8;
text-align:center;
// border:1px red solid;
margin-top:20px;
`

const Organize = styled.div`
color:white;
font-size:14px;
font-family:"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
letter-spacing:.67rem;
font-weight:light;
// border:1px red solid;
margin-right:145px;
opacity:.6;
`

const ButtonWrap = styled.div`
display:flex;
// border:1px purple solid;
margin-top:30px;
width:100%;
justify-content:center;
`

const Button = styled.button`
border-radius:5px;
opacity:.8;
border:1.5px white solid;
background-color:rgba(0,0,0,0);
padding:12px;
color:white;
font-family:"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
font-size:12px;
letter-spacing:.2rem;
margin:auto 20px;
outline:0;

&:hover {
    ${Button} {
        background-color:rgba(255,255,255,.4);
        border:1px rgba(0,0,0,0.4) solid;
        // outline:0;
        cursor:pointer;
    }

 &:active {    
    ${Button} {
    //    outline:0;
       box-shadow:0 0 0 0;
       top:2px;
       font-weight:400;
 }
`

const Background = styled.div`
width:100%;
height:100%;
margin:auto;
background-image: url(${img});
// background-image: url(${props => props.image})
//background-image: url(${require("../styles/default-image/image-3.jpg")});
background-size:cover;
background-attachment: fixed;
background-repeat: no-repeat;
background-position: center;
display: block;
overflow: auto;

`;

export {Methodize , Background, Organize , PageWrap, ButtonWrap, Button };