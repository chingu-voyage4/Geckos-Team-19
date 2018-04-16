import styled from 'styled-components';

const MadeByBtn = styled.button`
background-color:rgba(255,255,255,0);
cursor:pointer;
border:1px rgba(0,0,0,0) solid;
height:40px;
width:auto;
font-family: 'Helvetica', sans-serif;
font-size:10px;
letter-spacing:.2px;
font-weight:100;
// box-shadow:2px 2px 3px rgba(0,0,0,0.4);
transition: .2s all;
outline:0;
color:white;
margin-top:3px;
// border:1px red solid;

// &:hover {
//     ${MadeByBtn} {
//         background-color:rgba(255,255,255,.6);
//         border:1px rgba(0,0,0,0.4) solid;
//         // outline:0;
//     }

//  &:active {    
//     ${MadeByBtn} {
//     //    outline:0;
//        box-shadow:0 0 0 0;
//        top:2px;
//        font-weight:400;
//  }
    
//  &:focus {   
//    ${MadeByBtn} {
//      outline:0;
//   }

    
`
const DropdownContent= styled.ul` {
    list-style: none;
    position: absolute;
    background-color:rgba(255,255,255,.6);
    border:1px rgba(0,0,0,0.4) solid;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    text-align: left;
    padding: 0;
    margin-right: 0;
}`

const DropdownA = styled.li`
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    &:hover {
        ${DropdownA} {
            {background-color: #ddd}
        }
`
const Show = styled.div`
display: block;
`
export {MadeByBtn, DropdownContent, DropdownA, Show};