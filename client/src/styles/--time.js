
import styled from 'styled-components';

const ClockWrap = styled.div`
width: 100%;
padding: 5px;
`

const Clock = styled.p`
fonst-size: 45px;
font-weight: 100;
`
const $Date = styled.h1`
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
export { Clock, ClockWrap, ClockButton, $Date };