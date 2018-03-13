
import styled from 'styled-components';

const ClockWrap = styled.div`
position: relative;
border: 5px solid black;
border-radius: 10px;
background: grey;
margin: 10px;
padding: 5px;
min-width: 170px;
max-width: 50%;
min-height: 150px;
max-height: 20%;
`

const Clock = styled.p`

fonst-size: 45px;
font-weight: 100;
color: #f3efe4;
`
const $Date = styled.h1`
font-family: Hevetica, sans-serif;
position: absolute;
color: white;
left: 28%;
`
const ClockButton = styled.button`
position: absolute;
 font-family: Helvetica, sans-serif;
 font-size: 35px;
 color: white;
 background-color: rgba(0,0,0,0);
 outline: rgba(0,0,0,0);
 border: rgba(0,0,0,0);
 width: 100%;
bottom: 20px;
`

export { Clock, ClockWrap, ClockButton, $Date };