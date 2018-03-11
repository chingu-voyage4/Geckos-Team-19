
import styled from 'styled-components';

//styling for Weather
//container
const Div = styled.div`
position: relative;
min-width: 300px;
max-width: 20vw;
min-height: 300px;
max-height: 20vw;
background: #aed9f2;
border: #00a1ff solid 5px;
border-radius: 50%;
`
//ul temp display and temp button
const List = styled.ul`
display: block;
list-style: none;
left: 5px;
margin: auto;
margin-top: 15px;
width: 50%;
height: auto;
`
//li icon size, position, anything that is not specific to the icon
//might be overridden by the inline styling in --weatherIcons.js
const Icon = styled.li`

`
//li temp display
const ListTemp = styled.li`
font-family: 'Bowlby One SC', cursive;
font-size: 40px;
margin-left: 25px;
margin-top 20px;
`
//li tempBtn display
const ListBtn = styled.li`
width: 30%;
`

//style for tempButton.js:
//wrapper
const Button = styled.button`
border: 1px solid white;
border-radius: 50%;
background-color: rgba(0,0,0,.01);
width: 3rem;
height: 3rem;
margin-left: 25px;
margin-top 20px;
`
//button icon
const Temp = styled.div`
font-size: 40px;
font-align: center;
`

export { Button, Div, Temp, List, ListTemp, ListBtn, Icon };
