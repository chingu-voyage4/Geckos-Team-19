import styled from 'styled-components';
import img from './default-image/image-2.jpg';



const Background = styled.div`
position:absolute;
top:0;
left:0;
right:0;
bottom:0;
margin:auto;
background-image: url(${img});
background-size:cover;
background-attachment: fixed;
background-repeat: no-repeat;
 background-position:  center;
background-size: cover;
display: block;
overflow: auto;
`

const PageWrap = styled.div`
display:flex;
flex-direction:column;
//  border:1px red solid;
align-items:left
height:100vh;
width:auto;
align-items:center;
`

const FormNameWrap = styled.div`
width:450px;
background-color:rgba(0,0,0,.3);
height:100vh;
display:flex;
flex-direction:column;
align-items:center;
`

const NameWrap = styled.div`
display:flex;
flex-direction:column;
background-color:rgba(0,0,0,.3);
width:100%;
margin-top:20px;
padding-top:23px;
padding-bottom:30px;
align-items:center;
`

const Name = styled.div`
// border:1px red solid;
width:400px;
`



const Methodize = styled.div `
color:white;
letter-spacing:1rem;
font-size:38px;
font-family:"Helvetica";
opacity:.8;
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
opacity:.6;
width:100%;
// text-align:center;
padding-left:20px;
`

const Form = styled.form`
// border:1px red solid;
width:90%;
margin-top:28px;
background-color:rgba(0,0,0,.3);
padding:40px;
padding-top:30px;
border-radius:10px;
`

const AllInputs = styled.div`
display:flex;
flex-direction:column;
// border:1px red solid;
width:80%;
margin:0 auto;
`

const Heading = styled.div`
color:white;
font-family:"Helvetica", sans-serif;
text-transform:uppercase;
text-align:center;
opacity:.8;
font-size:23px;
//border:1px red solid;
letter-spacing:.2rem;
// margin-bottom:20px;
`

const Input = styled.input`
// box-shadow: 0 0 0px 1000px rgba(0,255,255,.8) inset;
// border:1px red solid;
width:100%;
`

const Label = styled.label`
color:white;
font-family:"Helvetica", sans-serif;
font-size:11px;
text-transform:lowercase;
opacity:.8;
margin-top:30px;
margin-bottom:-2px;
`

const Button = styled.button`
border-radius:5px;
opacity:1;
border:1.5px white solid;
background-color:rgba(0,0,0,0);
padding:12px;
color:white;
font-family:"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
font-size:12px;
letter-spacing:.2rem;
// margin:50px auto;
outline:0;
width:120px;
margin-top:30px;
&:hover {
    ${Button} {
        background-color:rgba(255,255,255,.4);
        border:1px rgba(0,0,0,0.4) solid;
        // outline:0;
        cursor:pointer;
        text-decoration:none;
    }

 &:active {    
    ${Button} {
    //    outline:0;
       box-shadow:0 0 0 0;
       top:2px;
       font-weight:400;
 }
`
const ButtonText = styled.div`
color:white;
`

const ButtonOther = styled.a `
border:1px rgba(0,0,0,0) solid;
color:white;
font-family:"helvetica", sans-serif;
font-size:11px;
// border-bottom:1px white solid;
cursor:pointer;
margin-top:18px;
`

const ButtonOtherText = styled.span `
border:1px rgba(0,0,0,0) solid;
color:white;
opacity:.8;
font-family:"helvetica", sans-serif;
font-size:11px;
border-bottom:1px white solid;
`

const ButtonsWrap = styled.div`
display:flex;
// border:1px red solid;
flex-direction:column;
align-items:center;
`
export {Background, PageWrap, Form, Methodize,ButtonsWrap, ButtonOther,ButtonOtherText, Organize, FormNameWrap, NameWrap,Name, Heading, Input,Label, Button, ButtonText, AllInputs};