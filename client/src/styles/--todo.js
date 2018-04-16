import styled from 'styled-components';

const Input = styled.input`
background-color: rgba(0,0,0,0)
border-radius: 3px;
border: 2px white solid;

`
const TodoAll = styled.p`
 border:1px red solid;
font-size:13px;
font-family:"Helevtica", sans-serif;
color:rgba(0,0,0,.8);
width:80%;
display:flex;
justify-content:space-around;
align-items:center;
text-align:left;
padding-top:14px;
padding-bottom:14px;
padding-left:10px;
}
`
const TodoText = styled.span`
width:90%;
// border:1px red solid;
margin-right:15px;
word-break : break-word

`

const TrashCan = styled.i`
font-size:12px;
color:rgba(0,0,0,0.3);
margin-left:2px;
// border:2px red solid;
`

export {  Input, TodoAll, TrashCan, TodoText};