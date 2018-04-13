
import styled from 'styled-components';

//styling for Weather
//container
const Div = styled.div`
//  border:1px orange solid;
 z-index:1;
`

const CityName = styled.h3`
text-transform:uppercase;
color:white;
font-family:'Helvetica', sans-serif;
font-size:16px;
letter-spacing:1px;
margin:0;
color:white;
color:rgba(255,255,255,1);
// border:1px red solid;
width:200px;
line-height:1.2;
height:auto;
margin-top:10px
margin-left:12px;
`


//_____________________ul temp display and temp button_____________________________



const WeatherWrap = styled.div`
list-style: none;
display:flex;
width:80%;
justify-content:center;
// border:1px blue solid;
background-color:rgba(0,0,0,0.2);
border-radius:10px;
box-shadow:2px 2px 2px 2px rgba(0,0,0,0.3);
padding;5px;
`

const ListItem = styled.div`
display:flex;
// border:1px brown solid;
 min-width:100px;
max-width:300px;
// justify-content:center;
// align-items:center;
color:white;
margin:0;
padding:0;
`
const MiddleWeather = styled.div `
    height:100%;
    display:flex;
    justify-content:left;
    align-items:flex-start;
    align-content:flex-start;
    justify-items:left;
    flex-direction:column;
    //  border:1px red solid;
    //  margin-left:10px;

`

//li icon size, position, anything that is not specific to the icon
//might be overridden by the inline styling in --weatherIcons.js
const Icon = styled.div`
font-size: 20px;
color: white;
margin-left:25px;
margin-right:25px;
//text-align:center;
// border:1px purple solid;
`


const InfoList = styled.div`
list-style-type: none;
text-align: center;
//  border:1px blue solid;
padding:0;
width:auto;
`
const InfoItem = styled.div`
   display: flex;
   color: rgba(255,255,255,1);
   font-size: 14px;
   font-family:"Helvetica", sans-serif;
  // padding:-12px 0;
   justify-content:center;
   align-items:center;
   width:auto;
   margin-top:3px;
   margin-left:5px;
//    border:1px red solid;
`

const ReturnedState = styled.div`
font-weight:300;
// margin-left:10px;
padding-bottom;-9px;
`

//_______________________________________TEMP



//li temp display
const TempBtnWrap = styled.div`
display:flex;
// border:1px red solid;
text-align:center;
justify-content:flex-start;
align-content:center;
align-items:center;
margin-left:10px;
`

//temp button icon
const ItemTemp = styled.div`
font-size: 16px;
// border:1px red solid;
color: rgba(0,0,0,0.1);
margin-right: 4px;
margin-left: 6px;
color:white;
text-align:center;
`

//style for tempButton.js:
//wrapper
const Button = styled.div`
border-radius: 3px;
text-align: center;
font-size: 12px;
height:14px;
 border:1px white solid;
 margin-right: 7px;
margin-left: 2px;
background-color:rgba(255,255,255,.2);
box-shadow:1px 1px 3px rgba(0,0,0,.8);
border:none;
color:white;
outline:0;
width:100%;

&:hover {
    ${Button} {
        background-color:rgba(0,0,0,.8);
        // outline:0;
        cursor:pointer;
        text-decoration:none;
    }

 &:active {    
    ${Button} {
       box-shadow:0 0 0 0;
       top:2px;
       font-weight:400;
 }
`


export { Button, Div, ItemTemp, TempBtnWrap,  Icon, InfoList, InfoItem, CityName,ReturnedState, ListItem,MiddleWeather};
