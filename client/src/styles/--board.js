import styled from 'styled-components';

const BoardWrap = styled.div`
display:flex;
background-color:rgba(255,255,255,0.4);
flex-direction:column;
// border:1px green solid;
border-radius:10px;
width:90%;
height:auto;
padding-top:20px;
padding-bottom:20px;
margin:20px;
box-shadow:1px 1px 5px rgba(0,0,0,0.4);
`

const WholeBoard = styled.div`
// border:1px purple solid;
display:flex;
width:80%;
margin-right:20px;
`

const TodoStyle = styled.div`
//  border:1px red solid;
display:flex;
flex-direction:column;
width:100%;
background-color:rgba(255,255,255,0.4);
margin:7px auto;
border-radius:5px;
text-align:center;
box-shadow:1px 1px 5px rgba(0,0,0,0.4);
font-family:Helvetica;
`

const InputStyle = styled.input`
width:70%;
margin:auto 3px;
`

const AddItemBtn = styled.button`
font-family:Helvetica;
font-size:11px;
background-color:white;
border:none;
padding-top:5px;
padding-bottom:5px;
margin:auto 3px;
border-radius:3px;
width:50%;
`

const FlexBtnInput = styled.div`
display:flex;
height:40px;
`

export {BoardWrap, TodoStyle, WholeBoard, InputStyle, FlexBtnInput, AddItemBtn};