
import styled from 'styled-components';

const Button = styled.button`
border: 3px solid white;
border-radius: 5px;
width: 25px;
font - weight: bolder;
text - align: center;
`
const Div = styled.div`
position: absolute;
margin: 10px;
min-width: 100px;
max-width: 5vw;
min-height: 100px;
max-height: 5vh;
background: #aed9f2;
border: #00a1ff solid 5px;
border-radius: 10px;
`
const Temp = styled.div`
font-size: 18px;
margin-bottom: -.2rem;
`
const TempWrap = styled.div`

`
const List = styled.ul`
list-style: none;
left: 0;
`
const ListTemp = styled.li`
position: absolute;
    bottom: 0px;
    left: 10px;
    width: 50%;
    padding: 2px;
    font-family: 'Bowlby One SC', cursive;

`

const ListBtn = styled.li`
position: absolute;
bottom: 5px;
right: 5px;
width: 30%;
`


export { Button };
export { Div };
export { TempWrap, Temp };
export { List };
export { ListTemp };
export { ListBtn };