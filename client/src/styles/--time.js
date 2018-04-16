
import styled from 'styled-components';

const Name = styled.div`
// border:1px red solid;
width:400px;
margin-top:5px;
`

const NameWrap = styled.div`
display:flex;
flex-direction:column;
border-radius:10px;
margin-top:20px;
margin-bottom:20px;
// padding-top:23px;
// padding-bottom:30px;
align-items:center;
// border:1px red solid;
`



const Methodize = styled.div `
color:white;
letter-spacing:1rem;
font-size:38px;
font-family:"Helvetica";
opacity:.9;
text-align:center;
// border:1px red solid;
`

const Organize = styled.div`
color:white;
font-size:12px;
font-family:"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
letter-spacing:.40rem;
font-weight:light;
//  border:1px red solid;
margin-top:-10px;
opacity:.9;
width:100%;
padding-left:20px;
`

const TimeDateInputWrap = styled.div`
display:flex;
flex-direction:column;
// border:1px red solid;
width:200px;
`

const TimeDateWrap = styled.div`
//border:1px red solid;
display:flex;
// flex-direction:column;
 width:130px;
margin-top:10px;
`

const TimeDateMadeByWrap = styled.div`
// border:1px blue solid;
display:flex;
margin-bottom:40px; 
justify-content:space-between;
background-color:/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+1,000000+98&0.57+32,0+100 */
background: -moz-linear-gradient(top, rgba(0,0,0,0.57) 1%, rgba(0,0,0,0.57) 32%, rgba(0,0,0,0.02) 98%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, rgba(0,0,0,0.57) 1%,rgba(0,0,0,0.57) 32%,rgba(0,0,0,0.02) 98%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, rgba(0,0,0,0.57) 1%,rgba(0,0,0,0.57) 32%,rgba(0,0,0,0.02) 98%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#91000000', endColorstr='#00000000',GradientType=0 ); /* IE6-9 */
width:100vw;
 position:absolute;

`

const Clock = styled.h2`
font-weight: 100;
font-size:10.5px;
font-weight:bold;
font-family: 'Helvetica', sans-serif;
margin: auto 7px;
margin-left:15px;
margin-top:0px; 
margin-bottom:10px;
color:white;

`


const D = styled.div`
margin-left:15px;
font-family: 'Helvetica', sans-serif;
//  border:1px red solid;
font-size:10.5px;
font-weight:100;
font:"Helvetica", "sans-serif"
margin-top:0;
color:white;
`
const ClockButton = styled.button`
 font-family: Helvetica, sans-serif;
 font-size: 35px;
 width: 100%;
// background-color: rgba(0,0,0,0);
border: none;
outline: none;
`

const LogoutMadeByWrap = styled.div`
display:flex;
flex-direction:column;
margin-right:15px;
// border:1px red solid;
align-items:center;
align-content:center;
`
export { Clock,TimeDateInputWrap, LogoutMadeByWrap, TimeDateMadeByWrap, ClockButton, D, TimeDateWrap, NameWrap, Name, Methodize, Organize };