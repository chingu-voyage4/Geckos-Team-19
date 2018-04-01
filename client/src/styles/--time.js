
import styled from 'styled-components';


 const TimeSettingsWrap = styled.div`
// border:1px red solid;
display:flex;
justify-content:center;
// align-items:center;
width:100%;
`

const ClockWrap = styled.div`

width:100%;
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
font-size:1.5rem;
font-weight:bold;
font-family: 'Helvetica', sans-serif;
margin: auto 7px;
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
font-family: 'Helvetica', sans-serif;
text-align: center;
width:100%;
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
export { Clock, ClockWrap, ClockButton, D, TimeSettingsWrap, SettingsButton };