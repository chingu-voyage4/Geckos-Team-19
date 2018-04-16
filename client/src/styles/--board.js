import styled from 'styled-components';

const BoardWrap = styled.div`
display:flex;
flex-direction:column;
border:2px rgba(255,255,255,0.6) solid;
border-radius:10px;
width:220px;
height:auto;
// align-items:center;
padding-bottom:60px;
 margin-right:9px;
 margin-left:9px

`

const WholeBoard = styled.div`
//  border:1px purple solid;
display:flex;
width:100%;
justify-content:center;
margin-top:230px;
`



const InputStyle = styled.input`
width:80%;
margin:auto;
background-color: rgba(0,0,0,0.3);
border-radius: 3px;
overflow-wrap: break-word;
border:2px white solid;
outline:0;
}

&:hover {
    ${InputStyle}{
        
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

export {BoardWrap, CardTitle, WholeBoard, InputStyle, FlexBtnInput, AddItemBtn};