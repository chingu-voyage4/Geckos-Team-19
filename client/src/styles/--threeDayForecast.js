import styled from 'styled-components';

const Hide = styled.div `
display: none;
`

const Days = styled.div `
display:flex;
// border:1px blue solid;
flex-direction:column;
margin-top:5px;
margin-bottom:5px;
height:200px;
width:100%;
`

const OneDay = styled.div `
// border:1px green solid;
display:flex;
margin-top:2px;
margin-bottom:2px;
// flex-direction:column;
`

const Show = styled.div`
// border:1px red solid;
display: flex;
width: auto;
height: 10vh;
// background-color: rgba(0,0,0,.5);
border-radius: 5px;
color: white;
margin-left:10px;
`

const DayName = styled.div`
font-size:10px;
font-weight:bold;
text-align:center;
`
const Text = styled.div`
font-size:10px;
margin-right:4px;
margin-left:4px;
`

const VertLine = styled.div`
marign: auto;
padding: 0;
border-left: 3px solid rgba(255, 255, 255, .5);
border-radius: 3px;
width: 50%;
height: 90%;
`

const BtnDaysContainer = styled.div`
display:flex;
// border:1px blue solid;
`

const ThreeDayInfo = styled.div`
display:flex;
margin-bottom:7px;
`

const BtnToggleWrap = styled.div`
display:flex;
flex-direction:column;
`

export { Hide, Show, VertLine, DayName, Days, Text, OneDay, BtnDaysContainer, ThreeDayInfo,BtnToggleWrap  };