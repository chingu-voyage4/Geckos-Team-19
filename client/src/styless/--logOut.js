import styled from 'styled-components';

const LogOutBtn = styled.button`
height:30px;
width:60px;
background-color:rgba(0,0,0,0);
cursor:pointer;
border-radius:5px;
color:white;
font-family:"Helvetica", sans-serif;
font-size:10px;
letter-spacing:.2px;
margin-top:10px;
box-shadow:2px 2px 2px 2px rgba(0,0,0,0.3);
// border:1px red solid;
// position:absolute;
right:0;
margin-right:10px;
margin-left:10px;
margin-bottom:10px;
outline:0;
transition:.2s all;

&:hover {
    ${LogOutBtn} {
        background-color:rgba(255,255,255,.6);
        border:1px rgba(0,0,0,0.4) solid;
        // outline:0;
    }

 &:active {    
    ${LogOutBtn} {
    //    outline:0;
       box-shadow:0 0 0 0;
       top:2px;
       font-weight:400;
`


export {LogOutBtn};