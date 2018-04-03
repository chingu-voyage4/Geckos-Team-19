import styled from 'styled-components';

const Container = styled.div`
display: block;
min-width: 100vw;
min-height: 300px;
max-height: auto;
background-color: rgba(0,0,0,0);
color: white
`
const FlexTodoBox = styled.p`
display:inline-block;
width:30%;
justify-content:center;
align-items:left;
background-color: rgba(0,0,0, .5);
border-radius: 5px;
border: 5px white solid;
`
const Input = styled.input`
background-color: rgba(0,0,0,0)
border-radius: 3px;
border: 2px white solid;
`

export { Container, FlexTodoBox, Input };