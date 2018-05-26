import styled from 'styled-components';
import {keyframes} from 'styled-components';

const Input = styled.input`
background-color: rgba(0,0,0,0)
border-radius: 3px;
border: 2px white solid;

`

const fadeIn = keyframes`
0%{
    opacity: 0;
}
100% {
    opacity: 1;
}
`

const FadeIn = styled.div`
animation: ${fadeIn} .5s linear;
`


const TodoAll = styled.div`
//  border:1px red solid;
font-size:13px;
font-family:"Helevtica", sans-serif;
color:rgba(0,0,0,.8);
width:100%;
display:flex;
justify-content:flex-start;
align-items:center;
text-align:left;
padding-top:14px;
padding-bottom:14px;
// padding-left:10px;
position:relative;
}
`
const TodoText = styled.div`
width:80%;
// border:1px red solid;
margin-left:10px;
margin-right:20px;
word-break : break-word
font-size:12px;
`

const TrashCan = styled.i`
font-size:12px;
color:rgba(0,0,0,0.3);
margin-right:12px;
//  border:1px red solid;
`

const TrashCanSpan = styled.span`
width:100%;
`

export {  Input, TodoAll, TrashCan, TodoText,FadeIn};