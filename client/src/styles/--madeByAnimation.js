import {keyframes} from 'styled-components';
import styled from 'styled-components';





const MadeByNames = styled.p`
margin-top: -60px;
transition: all 1s ease;
color: transparent;
height: 75px;
padding-top: 30px;
;

&:hover {
  ${MadeByNames}{
    transform: translate(0px, 30px);
    color: white;
}
`   
const MadeByTitle = styled.div`
background-color:rgba(255,255,255,0);
cursor:pointer;
border:1px rgba(0,0,0,0) solid;
height:75px;
width:auto;
font-family: 'Helvetica', sans-serif;
font-size:20px;
letter-spacing:.2px;
font-weight:100;
// box-shadow:2px 2px 3px rgba(0,0,0,0.4);
outline:0;
color: white;
margin-top:5px;
// border:1px red solid;
right: 5px;
//transition: all 2s ease;

 &:hover {
    ${MadeByTitle} {
      
  }}
`
export {MadeByNames, MadeByTitle};