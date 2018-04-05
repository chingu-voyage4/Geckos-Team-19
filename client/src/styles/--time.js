
import styled from 'styled-components';


const TimeDateWrap = styled.div`
// border:1px red solid;
display:flex;
flex-direction:column;
width:90px;
height:70px;
`

const TimeDateMadeByWrap = styled.div`
// border:3px blue solid;
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:40px;
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
`

const SettingsButton = styled.button`
margin: auto 7px;
background-color:rgba(0,0,0,.2);
border-radius:5px;
border:.5px white solid;
outline: none;
padding:5px;
color: white;
transition: .2s all;
box-shadow:2px 2px 3px rgba(0,0,0,.5);

&:hover {
    ${SettingsButton} {
      color: black;
      background-color:rgba(255,255,255,.2);
      cursor:pointer;
    }
  }

  &:active {
    ${SettingsButton} {
        color: black;
        background-color:rgba(255,255,255,.2);
        box-shadow:1px 1px 2px rgba(0,0,0,0);
        top:2px;
    }
  }
`
const D = styled.h1`
margin-left:15px;
font-family: 'Helvetica', sans-serif;
//  border:1px red solid;
font-size:1rem;
font-weight:100;
font:"Helvetica", "sans-serif"
margin-top:0;
`
const ClockButton = styled.button`
 font-family: Helvetica, sans-serif;
 font-size: 35px;
 width: 100%;
// background-color: rgba(0,0,0,0);
border: none;
outline: none;
`
export { Clock, TimeDateMadeByWrap, ClockButton, D, TimeDateWrap, SettingsButton };