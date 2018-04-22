import styled from 'styled-components';

const Hide = styled.div `
display: none;
`
const Show = styled.div`
display: flex;
width: auto;
height: 25vh;
background-color: rgba(0,0,0,.5);
border-radius: 5px;
color: white;
`
const Day1 = styled.div`
    height:100%;
    display:flex;
    justify-content:left;
    align-items:flex-start;
    align-content:flex-start;
    justify-items:left;
    flex-direction:column;
    padding: 5px;
`
const Day2 = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    padding: 5px;
`
const Day3 = styled.div`
    height:100%;
    display:flex;
    justify-content:right;
    align-items:flex-end;
    align-content:flex-end;
    justify-items:right;
    flex-direction:column;
    padding: 5px;
`
const VertLine = styled.div`
marign: auto;
padding: 0;
border-left: 3px solid rgba(255, 255, 255, .5);
border-radius: 3px;
width: 50%;
height: 90%;
`

export { Hide, Show, Day1, Day2, Day3, VertLine };