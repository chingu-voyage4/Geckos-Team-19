import styled from 'styled-components';

const BoardWrap = styled.div`
display:flex;
// background-color:rgba(255,255,255,0.4);
flex-direction:column;
 border:2px rgba(0,0,0,0.3) solid;
border-radius:10px;
width:90%;
height:auto;
padding:20px;
padding-bottom:60px;
 margin-right:9px;
 margin-left:9px
//  margin-top:10px;
`

const WholeBoard = styled.div`
 border:1px purple solid;
display:flex;
width:90%;
justify-content:center;
margin-top:230px;
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
overflow-wrap: break-word;
cursor:pointer;
}
`

const InputStyle = styled.input`
width:100%;
margin:auto 3px;
overflow-wrap: break-word;
}
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
const CardTitle = styled.input`
width: 90%;
background-color: transparent;
border: 0px;
outline: none;
-webkit-box-shadow: none;
-moz-box-shadow: none;
box-shadow: none;
color:white;
font-family:"Helvetica", sans-serif;
text-shadow:2px 2px rgba(0,0,0,.3);
cursor:default;
text-align: center;
font-size: 30px;
font-weight: 900;
&:focus {
${CardTitle} {
::placeholder{
color: transparent;
}
}
`

export {BoardWrap, CardTitle, TodoStyle, WholeBoard, InputStyle, FlexBtnInput, AddItemBtn};