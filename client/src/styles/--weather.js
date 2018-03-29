
import styled from 'styled-components';

//styling for Weather
//container
const Div = styled.div`
min-width: 300px;
max-width: 20vw;
min-height: 300px;
max-height: 100vh;
// background-color: rgba(225,225,225,0.4);
padding-top: 3px;
border-radius: 5px;
margin-top: 2px;
`

const CityName = styled.h3`
text-transform:uppercase;
color:white;
font-family:'Helvetica', sans-serif;
font-size:40px;
letter-spacing:4px;
border-bottom:2px white solid;
padding: 12px;
margin:0;
color:rgba(0,0,0,.8);
text-align:center;
`


const FlexInput = styled.div`
display:flex;
width:100%;
justify-content:center;
align-items:center;
margin-top:12px;
padding-bottom:15px;
`

const InputBar = styled.input`
width: auto;
height: 3vh;
border-radius: 5px;
padding: 5px;
box-shadow: 1px 1px 2px rgba(0,0,0,.4);
outline: 0;
font-family: 'Helvetica', sans-serif;
font-size:12px;
color:rgba(0,0,0,.8);
// margin-right: 5px;
// margin-left:5px;
background-color:rgba(0,0,0,0);
border:1px white solid;

`
const InputButton = styled.button`
font-family: 'Helvetica', sans-serif;
font-size:13px;
letter-spacing:.6px;
// margin-left:5px;
// margin-right: 5px;
padding:8px 7px;
border-radius:5px;
box-shadow:1px 1px 2px rgba(0,0,0,.4);
background-color:rgba(0,0,0,0);
border:1px white solid;
`

//_____________________ul temp display and temp button_____________________________



const List = styled.ul`
list-style: none;
text-align: center;
color: white;
font-size: 20px;
font-weight: bolder;
// border:1px red solid;
display:flex;
padding:0;
margin:0;
`
//li icon size, position, anything that is not specific to the icon
//might be overridden by the inline styling in --weatherIcons.js
const Icon = styled.li`
margin-top: 20px;
margin-bottom: 20px;
font-size: 5rem;
color: white;
// border:1px red solid;
width:100%;
margin:auto;
`
const FlexInfo = styled.div`
display:flex;
flex-direction:column;
//  border:1px red solid;
border-right:2px white solid;
 margin:15px 0;
width:100%;
// justify-content:center;
// align-content:center;
align-items:center;
`

const InfoList = styled.ul`
list-style-type: none;
text-align: center;
//  border:1px red solid;
padding:0;
// margin: 15px 0;
width:100%;
line-height: 2px;
`
const InfoItem = styled.li`
   display: flex;
   color: rgba(0,0,0,0.8);
   font-size: 14px;
   font-family:"Helvetica", sans-serif;
    padding:-12px 0;
 // border-bottom:1px white solid;
    justify-content:center;
    align-items:center;
    width:100%;
//    margin:0;
//    padding:0;
line-height: 2px;
`

const ReturnedState = styled.p`
font-weight:300;
`

//_______________________________________TEMP

const FlexTemp = styled.div`
display:flex;
justify-content:center;
align-items:center;
align-content:center;
width:100%;
// border:1px red solid;
text-align:center;
`

//li temp display
const ListTemp = styled.ul`
// overflow: hidden;
list-style: none;
font-family: 'Helvetica', sans-serif;
font-size: 40px;
// border:1px red solid;
padding:0;
margin:0;
text-align:center;
`
//li tempBtn display
const ItemBtn = styled.li`
// border:1px red solid;
padding:0;
margin:0;
`
//li button icon
const ItemTemp = styled.li`
font-size: 40px;
// border:1px red solid;
color: rgba(0,0,0,0.8);
margin-right: 4px;
margin-left: 6px;
`

//style for tempButton.js:
//wrapper
const Button = styled.button`
// border: 3px solid white;
border-radius: 3px;
text-align: center;
font-size: 15px;
// border:3px red solid;
margin-right: 7px;
margin-left: 4px;
margin-bottom:12px;
background-color:rgba(255,255,255,.5);
box-shadow:1px 1px 3px rgba(0,0,0,.3);
`


//TW Card --wraps the Time and Weather into one card
const TW = styled.div`
border : none;
background-color: rgba(255,255,255,0.4);
margin-left:30px;
margin-top:20px;
min-width: 30%;
max-width: auto;
border-radius: 10px;
box-shadow:1px 1px 5px rgba(0,0,0,0.4)
`

export { Button, Div, ItemTemp, List, ListTemp, ItemBtn, Icon, TW, InfoList, InfoItem, InputBar, InputButton, CityName, FlexInput, FlexInfo,ReturnedState, FlexTemp};
