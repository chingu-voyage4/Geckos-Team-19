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
const TodoText = styled.p`
//  border:1px red solid;
font-size:13px;
font-family:"Helevtica", sans-serif;
color:rgba(0,0,0,.8);
margon-right:2px;
width:80%;
display:flex;
justify-content:space-around;
align-items:center;
}
`
const TrashCan = styled.i`
font-size:12px;
color:rgba(0,0,0,0.3);
margin-left:2px;
// border:2px red solid;
`

export { Container,  Input, TodoText, TrashCan};