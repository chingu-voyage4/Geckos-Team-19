
import styled from 'styled-components';

const ClockWrap = styled.div`
min-width: 300px;
max-width: 20vw;
max-height: 20vh;
// background-color: rgba(225,225,225,0.4);
// border-radius: 5px;
color: rgba(0,0,0,.8);
padding:7px 0 
margin-bottom:10px;
// box-shadow:1px 1px 5px rgba(0,0,0,0.4);
border-bottom:2px rgb(255,255,255) solid;
`

const Clock = styled.h2`
font-weight: 100;
text-align: center;
margin-top:-10px;
font-size:1.5rem;
font-weight:bold;
font-family: 'Helvetica', sans-serif;
`
const D = styled.h1`
font-family: 'Helvetica', sans-serif;
text-align: center;
// border:1px red solid;
font-size:1.5rem;
font-weight:100;
padding-top:5px;
font:"Helvetica", "sans-serif"
`
const ClockButton = styled.button`
 font-family: Helvetica, sans-serif;
 font-size: 35px;
 width: 100%;
// background-color: rgba(0,0,0,0);
border: none;
outline: none;
`
export { Clock, ClockWrap, ClockButton, D };