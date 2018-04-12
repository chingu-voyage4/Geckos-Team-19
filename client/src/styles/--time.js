
import styled from 'styled-components';

const Name = styled.div`
// border:1px red solid;
width:400px;
margin-top:5px;
`

const NameWrap = styled.div`
display:flex;
flex-direction:column;
border-radius:10px;
margin-top:20px;
margin-bottom:20px;
// padding-top:23px;
// padding-bottom:30px;
align-items:center;
`



const Methodize = styled.div `
color:white;
letter-spacing:1rem;
font-size:38px;
font-family:"Helvetica";
opacity:.9;
text-align:center;
// border:1px red solid;
`

const Organize = styled.div`
color:white;
font-size:12px;
font-family:"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
letter-spacing:.40rem;
font-weight:light;
//  border:1px red solid;
margin-top:-10px;
opacity:.9;
width:100%;
// text-align:center;
padding-left:20px;
`

const TimeDateWrap = styled.div`
// border:1px red solid;
display:flex;
flex-direction:column;
width:130px;
height:70px;
margin-top:10px;
`

const TimeDateMadeByWrap = styled.div`
// border:3px blue solid;
display:flex;
margin-bottom:20px;
justify-content:space-between;
background-color:rgba(0,0,0,0.4);
width:100%;
justify-content:space-around;
`

const Clock = styled.h2`
font-weight: 100;
font-size:1rem;
font-weight:bold;
font-family: 'Helvetica', sans-serif;
margin: auto 7px;
margin-left:15px;
margin-top:-5px;
margin-bottom:40px;
color:white;

`


const D = styled.h1`
margin-left:15px;
font-family: 'Helvetica', sans-serif;
//  border:1px red solid;
font-size:1rem;
font-weight:100;
font:"Helvetica", "sans-serif"
margin-top:0;
color:white;
`
const ClockButton = styled.button`
 font-family: Helvetica, sans-serif;
 font-size: 35px;
 width: 100%;
// background-color: rgba(0,0,0,0);
border: none;
outline: none;
`
export { Clock, TimeDateMadeByWrap, ClockButton, D, TimeDateWrap, NameWrap, Name, Methodize, Organize };