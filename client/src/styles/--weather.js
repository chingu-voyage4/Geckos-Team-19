
import styled from 'styled-components';

//styling for Weather
//container
const Div = styled.div`
position: relative;
min-width: 300px;
max-width: 20vw;
min-height: 300px;
max-height: 100vh;
background-color: rgba(0,0,0,0.3);
padding-top: 3px;
border-radius: 5px;
margin-top: 2px;
`
//ul temp display and temp button
const List = styled.ul`
list-style: none;
text-align: center;
padding-left: 15px;
color: white;
font-size: 20px;
font-weight: bolder;
`
//li icon size, position, anything that is not specific to the icon
//might be overridden by the inline styling in --weatherIcons.js
const Icon = styled.li`
margin - top: 20px;
margin - bottom: 20px;
font - size: 80px;`

//li temp display
const ListTemp = styled.ul`
list-style: none;
font-family: 'Bowlby One SC', cursive;
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
`


//TW Card --wraps the Time and Weather into one card
const TW = styled.div`
border : none;
background-color: rgba(0,0,0,.05);
margin: auto;
min-width: 30%;
max-width: 300px;
border-radius: 10px;
`

export { Button, Div, ItemTemp, List, ListTemp, ItemBtn, Icon, TW };
