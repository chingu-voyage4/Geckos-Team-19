import styled from 'styled-components';

const MadeByBtn = styled.button`
background-color:rgba(255,255,255,.4);
cursor:pointer;
border:1px rgba(0,0,0,0.2) solid;
margin-right:15px;
height:40px;
padding-right: 12px;
padding-left: 16px;
border-radius:10px;
font-family: 'Helvetica', sans-serif;
letter-spacing:3px;
font-size:.8rem;
font-weight:100;
box-shadow:2px 2px 3px rgba(0,0,0,0.4);
transition: .2s all;
outline:0;

&:hover {
    ${MadeByBtn} {
        background-color:rgba(255,255,255,.6);
        border:1px rgba(0,0,0,0.4) solid;
        // outline:0;
    }

 &:active {    
    ${MadeByBtn} {
    //    outline:0;
       box-shadow:0 0 0 0;
       top:2px;
       font-weight:400;
 }
    
//  &:focus {   
//    ${MadeByBtn} {
//      outline:0;
//   }

    
`

export {MadeByBtn};