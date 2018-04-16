import styled from 'styled-components';

const Container = styled.div`
display: block;
min-width: 100vw;
min-height: 300px;
max-height: auto;
background-color: rgba(0,0,0,0);
color: white
`
const Input = styled.input`
background-color: rgba(0,0,0,0)
border-radius: 3px;
border: 2px white solid;
`
const TodoAll = styled.p`
//  border:1px red solid;
font-size:13px;
font-family:"Helevtica", sans-serif;
color:rgba(0,0,0,.8);
margon-right:2px;
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

`

const TrashCan = styled.i`
font-size:12px;
color:rgba(0,0,0,0.3);
margin-left:2px;
// border:2px red solid;
`

export { Container,  Input, TodoAll, TrashCan, TodoText};