import React from 'react';
import styled from 'styled-components';
import theme from '@theme'

interface ButtonProps {
    label?: string;
    href: string;
    bgColor?: string;
}

const SButton = styled.button`
    border-radius: 10px;
    padding: 30px;
    margin: 5px;
    font-weight: bolder;
    box-shadow: 1px 1px 3px black;
    font-family: "Globotipo Variable";
    text-decoration:none;
    cursor: pointer;
    background-color: ${(props: ButtonProps) => props.bgColor? props.bgColor : theme.primaryColor};
    color: #fff;
    font-size: 1.25rem;
    border-style:none;

    &:hover {
        background-color: ${theme.primaryColorDark};
    }

`

const Button = (props: ButtonProps) => {

    return <SButton {...props} onClick={() => window.open(props.href, '_blank')}>{props.label}</SButton>
}

export default Button