import styled from 'styled-components';
import { keyframes } from 'styled-components';


const fadeIn = keyframes `
0%{
    opacity: 0;
}
100% {
    opacity: 1;
}
`

const FadeIn = styled.div `
animation: ${fadeIn} .2s linear;
`

const Hide = styled.div `
display: none;
`

const Days = styled.div `
display:flex;
// border:1px blue solid;
flex-direction:column;
margin-top:5px;
margin-bottom:5px;
height:200px;
width:100%;
color:white;
margin-left:12px;
`

const OneDay = styled.div `
display:flex;
margin-top:2px;
margin-bottom:2px;
align-items:center;
// flex-direction:column;
`

const Show = styled.div`
// border:1px red solid;
display: flex;
width: auto;
height: 10vh;
// background-color: rgba(0,0,0,.5);
border-radius: 5px;
color: white;
margin-left:10px;
`

const DayName = styled.div`
font-size:10px;
font-weight:bold;
text-align:center;
margin-right:3px;
`
const Text = styled.div`
font-size:10px;
margin-right:4px;
margin-left:4px;
`

const VertLine = styled.div`
marign: auto;
padding: 0;
border-left: 3px solid rgba(255, 255, 255, .5);
border-radius: 3px;
width: 50%;
height: 90%;
`

const BtnDaysContainer = styled.div`
display:flex;
// border:1px blue solid;
`

const ThreeDayInfo = styled.div`
display:flex;
margin-bottom:7px;
`

const BtnToggleWrap = styled.div`
display:flex;
flex-direction:column;
`

const Icon = styled.i`
font-size:10px;
margin-left:3px;
`

const FCToggle = styled.div`
font-size:10px;
font-weight:bold;
font-family:Helvetica;
margin-left:-4px;
margin-right:-4px;
`

const ToggleContainer = styled.div`
display:flex;
margin-left:6px;
// border:1px red solid;
align-items:center;
padding-bottom:3px;
margin-bottom:10px;

`

export { Hide, FCToggle, ToggleContainer, Show, VertLine, DayName, Days, Text, OneDay,FadeIn, BtnDaysContainer, ThreeDayInfo,BtnToggleWrap, Icon  };