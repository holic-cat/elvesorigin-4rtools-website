import React from 'react'
import styled from 'styled-components'
import theme from '@theme'

const SFooter = styled.footer`
    text-align: center;
    font-family: "Globotipo Variable";
    padding: 20px;
    background-color: ${theme.secondaryColor};
    color: #fff;
`


const Footer = () => {
    
    return (
        <SFooter> 
            <p>{new Date().getFullYear()} &copy; 4RTools Development Team</p>
            <p>All other trademarks, logos and copyrights are property of Gravity and their respective owners</p>
        </SFooter>
    )
}

export default Footer