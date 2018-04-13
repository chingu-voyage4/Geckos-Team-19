import styled from 'styled-components';

const LogOutBtn = styled.button`
height:30px;
background-color:rgba(0,0,0,0.4);
cursor:pointer;
border-radius:5px;
color:white;
font-family:"Helvetica", sans-serif;
font-size:10px;
letter-spacing:.2px;
margin-top:10px;
box-shadow:2px 2px 2px 2px rgba(0,0,0,0.3);
// border:1px red solid;
position:absolute;
right:0;
margin-right:20px;
`

const LogOutBtnWrap = styled.div`
width:100%;
// border:1px red solid;
display:flex;
justify-content:right;
`

export {LogOutBtn, LogOutBtnWrap};