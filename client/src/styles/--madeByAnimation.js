import {keyframes} from 'styled-components';
import styled from 'styled-components';





const MadeByNames = styled.p`
margin-top: -50px;
transition: all 1s ease;
color: transparent;
height: 75px;
padding-top: 30px;
;

&:hover {
  ${MadeByNames}{
    display:flex;
    flex-direction:column;
    transform: translate(0px, 30px);
    color: white;
}
`

const MadeBySocial = styled.a`
margin-top: -60px;
// transition: all 1s ease;
color:inherit;
// height: 75px;
// padding-top: 30px;

&:hover {
  ${MadeBySocial}{
    // display:flex;
    // flex-direction:column;
    // transform: translate(0px, 30px);
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
font-size:11px;
letter-spacing:.2px;
font-weight:bolder;
// box-shadow:2px 2px 3px rgba(0,0,0,0.4);
outline:0;
color: white;
margin-top:15px;
//  border:1px red solid;
right: 5px;
//transition: all 2s ease;
text-align:center;

 &:hover {
    ${MadeByTitle} {
      
  }}
`

const Name = styled.div`
font-weight:100;
font-size:14px;
`


export {MadeByNames, MadeByTitle, Name, MadeBySocial};