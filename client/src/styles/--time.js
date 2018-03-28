
import styled from 'styled-components';

const ClockWrap = styled.div`
min-width: 300px;
max-width: 20vw;
max-height: 20vh;
background-color: rgba(0, 0, 0, .3);
border-radius: 5px;
color: white;
`

const Clock = styled.h2`
fonst-size: 30px;
font-weight: 100;
text-align: center;
`
const D = styled.h1`
font-family: Hevetica, sans-serif;
text-align: center;
`
const ClockButton = styled.button`
 font-family: Helvetica, sans-serif;
 font-size: 35px;
 width: 100%;
background-color: rgba(0,0,0,0);
border: none;
outline: none;
`
export { Clock, ClockWrap, ClockButton, D };