import styled from 'styled-components';



export const Label = styled.label `
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
`
export const SliderCheckbox = styled.input `
display: none;

&:checked {
    ${SliderCheckbox, Slider} {
        background-color: #2196F3;
        &::before{
            ${Slider}{
                -webkit-transform: translateX(26px);
                -ms-transform: translateX(26px);
                transform: translateX(26px);
            }
        }
    }
&:focus{
    ${SliderCheckbox, Slider}{
        box-shadow: 0 0 1px #2196F3;
    }
}
}
`
export const Slider = styled.span `
    /*slider*/
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
    border-radius: 50%;

    &::before{
        ${Slider} {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
        }
    }
`