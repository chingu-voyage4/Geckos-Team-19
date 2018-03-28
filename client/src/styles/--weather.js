
import styled from 'styled-components';

//styling for Weather
//container
const Div = styled.div`

min-width: 300px;
max-width: 20vw;
min-height: 300px;
max-height: 100vh;
background-color: rgba(0,0,0,0.3);
padding-top: 3px;
border-radius: 5px;
margin-top: 2px;
`
const InputBar = styled.input`
width: auto;
height: 3vh;
border-radius: 5px;
padding: 5px;
`
const InputButton = styled.div`

`
//ul temp display and temp button
const List = styled.ul`
list-style: none;
text-align: center;
color: white;
font-size: 20px;
font-weight: bolder;
`
//li icon size, position, anything that is not specific to the icon
//might be overridden by the inline styling in --weatherIcons.js
const Icon = styled.li`
margin - top: 20px;
margin - bottom: 20px;
font-size: 3rem;
color: white;
`
const InfoList = styled.ul`
margin: 0;
padding: 0;
list-style-type: none;
text-align: center;
`
const InfoItem = styled.li`
   display: inline;
   padding: .2em 1em;
   color: white;
   font-size: 15px;
   padding: 5px;
`
//li temp display
const ListTemp = styled.ul`
overflow: hidden;
list-style: none;
font-family: 'Helvetica', cursive;
font-size: 40px;
margin-left: -40px;
`
//li tempBtn display
const ItemBtn = styled.li`

`
//li button icon
const ItemTemp = styled.li`
font-size: 40px;
margin-top: 10px;
padding-top: 10px;
`

//style for tempButton.js:
//wrapper
const Button = styled.button`
border: 3px solid white;
border-radius: 50%;
width: 3rem;
height: 3rem;
margin: 10px;
text-align: center;
font-size: 40px;
`


//TW Card --wraps the Time and Weather into one card
const TW = styled.div`
border : none;
background-color: rgba(0,0,0,.05);

min-width: 30%;
max-width: 300px;
border-radius: 10px;
`

export { Button, Div, ItemTemp, List, ListTemp, ItemBtn, Icon, TW, InfoList, InfoItem, InputBar, InputButton };
