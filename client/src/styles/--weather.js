
import styled from 'styled-components';

//styling for Weather
//container
const Div = styled.div`
max-width: 100%;
max-height: 100vh;
padding-top: 3px;
border-radius: 5px;
margin-top: 2px;
display:flex;
justify-content:center;
// border:1px orange solid;
margin-bottom:20px;
`

const CityNameInputWrap = styled.div`
// /border:1px red solid;
display:flex;
flex-direction:column;
align-items:center;

`

const CityName = styled.h3`
text-transform:uppercase;
color:white;
font-family:'Helvetica', sans-serif;
font-size:20px;
letter-spacing:4px;
padding: 12px;
margin:0;
color:rgba(0,0,0,.8);
 text-align:center;

`



const InputBar = styled.div`
`


//_____________________ul temp display and temp button_____________________________



const List = styled.div`
list-style: none;
display:flex;
width:80%;
justify-content:center;
// border:1px blue solid;
`

const ListItem = styled.div`
display:flex;
//  border:1px brown solid;
 min-width:250px;
max-width:300px;
justify-content:center;
align-items:center;
margin-top:-30px;
margin:0 10px;
padding:0;
`
const MiddleWeather = styled.div `
    border-right:2px white solid;
    border-left:2px white solid;
    height:100%;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    align-content:center;
`

//li icon size, position, anything that is not specific to the icon
//might be overridden by the inline styling in --weatherIcons.js
const Icon = styled.div`
font-size: 5rem;
color: white;
width:100%;
text-align:center;
// border:1px purple solid;
`


const InfoList = styled.div`
list-style-type: none;
text-align: center;
//  border:1px red solid;
padding:0;
width:auto;
line-height: 2px;
`
const InfoItem = styled.div`
   display: flex;
   color: rgba(0,0,0,0.8);
   font-size: 14px;
   font-family:"Helvetica", sans-serif;
    padding:-12px 0;
    justify-content:center;
    align-items:center;
    width:auto;
   margin-top:-10px;
   margin-botto:-10px;
   margin-left:5px;
`

const ReturnedState = styled.p`
font-weight:300;
margin-left:5px;
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
const TempBtnWrap = styled.div`
display:flex;
font-family: 'Helvetica', sans-serif;
font-size: 40px;
// border:1px red solid;
text-align:center;
justify-content:center;
margin-right:5px;
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
border-radius: 3px;
text-align: center;
font-size: 15px;
// border:3px red solid;
 margin-right: 7px;
margin-left: 2px;
margin-bottom:12px;
background-color:rgba(255,255,255,.2);
box-shadow:1px 1px 3px rgba(0,0,0,.3);
border:none;
color:rgba(0,0,0,0.6);
outline:0;
`


export { Button, Div, ItemTemp, List, TempBtnWrap, CityNameInputWrap, ItemBtn, Icon, InfoList, InfoItem, InputBar, CityName,ReturnedState, FlexTemp, ListItem,MiddleWeather};
