import React from 'react'
import styled, { css } from 'styled-components'
import {Button,ButtonStyle2,ButtonStyle3,ButtonStyle4}from './Components/Buttons'




export default function Btn() {
       
    
        return (
            <>
            <p>hi</p>
            <Button>버튼1</Button>
            <ButtonStyle2>버튼2</ButtonStyle2>
            <ButtonStyle3>버튼3</ButtonStyle3>
            <ButtonStyle4>버튼4</ButtonStyle4>
            </>
        )
    }
    








// export default function Btn() {
//     const Button = styled.button`
//     background-color: royalblue;
//     padding:10px;
//     color:white;
//     `;

//     const ButtonStyle2 = styled(Button)`
//     color:#000;
//     border: none;
//     border-radius: 10px;
//     font-weight: bold;

//     `
//     const ButtonStyle3 = styled(Button)`
//     color:blue;
//     border: none;
//     width: 100px;
//     background-color: bisque;
//     `

//     const ButtonStyle4 = styled(ButtonStyle2)`
//     border-radius: 20px;
//     padding: 40px;
//     `

//     return (
//         <>
//         <Button>버튼1</Button>
//         <ButtonStyle2>버튼2</ButtonStyle2>
//         <ButtonStyle3>버튼3</ButtonStyle3>
//         <ButtonStyle4>버튼4</ButtonStyle4>
//         </>
//     )
// }
