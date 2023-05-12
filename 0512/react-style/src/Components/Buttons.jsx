import React from 'react'
import styled, { css } from 'styled-components'

    const Button = styled.button`
    background-color: royalblue;
    padding:10px;
    color:white;
    `;

    const ButtonStyle2 = styled(Button)`
    color:#000;
    border: none;
    border-radius: 10px;
    font-weight: bold;

    `
    const ButtonStyle3 = styled(Button)`
    color:blue;
    border: none;
    width: 100px;
    background-color: bisque;
    `

    const ButtonStyle4 = styled(ButtonStyle2)`
    border-radius: 20px;
    padding: 40px;
    `
    export {Button,ButtonStyle2,ButtonStyle3,ButtonStyle4}