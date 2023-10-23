import React, {useEffect, useState} from 'react'
import styled, {keyframes} from 'styled-components'
import {Row, Container, Col} from 'react-grid-system'
import Button from '@components/Button'
import Image from '@components/Image'
import {fadeInUp} from 'react-animations'
import theme from '@theme'

const fadeAnimation = keyframes`${fadeInUp}`;
const alignCenter = {display: "flex", justifyContent: "center"}

const CHero = styled.div`
    img {
        margin: 0px auto;
        display: block;
    }
`

const CText = styled.span`
    background-color: ${theme.secondaryColor};
    padding: 20px;
    color: #fff;
    border-radius: 6px;
    font-family: "Globotipo Variable";
    font-weight: bolder;
    text-align: center;
    font-size: 1.5rem;
    margin: 40px 0;
`
const DiscordIcon = styled.a`
    position: fixed;
    top: 0;
    z-index: 3;
    right: 0;
    cursor: pointer;

    & img{
        width: 224px;
    }
`

const AnimatedFrame = styled.div`
    animation: 0.5s ${fadeAnimation};
`
const SHiddenMobile = styled.div`
  @media screen and (max-width: 700px) {
    display: none;
  }
`

interface IReleaseData{
    endpoint: string;
    tag: string;
}

const Hero = () => {
    const [releaseData, setReleaseData] = useState<IReleaseData>({endpoint: "https://github.com/4RTools/4RTools/releases/download/v1.5.6/4RTools.-.v1.5.6.rar", tag: "v1.5.6"})

    useEffect(() => {
        fetch("https://api.github.com/repos/4RTools/4RTools/releases/latest")
        .then(res => res.json())
        .then((data:any) => {
            if(data.assets && data.assets.length){
                setReleaseData({ endpoint: data.assets[0].browser_download_url, tag: data.name});
            }   
        })
    }, [])

    return(
    <div>
        <SHiddenMobile>
            <Image style={{position: "fixed", width: "100%", zIndex: -1,"opacity": 0.2}} src="background.jpg"/>
        </SHiddenMobile>
        <DiscordIcon target={"_blank"} href="https://discord.gg/AtZ2fJVtBz">
            <Image src="join-disc.png"/>
        </DiscordIcon>
        <Container fluid>
            <Row>
                <Col xs={12}>
                    <CHero> 
                        <Image src={"logo-4rtools.png"}/>
                    </CHero>
                </Col>
                <Col xs={12} style={{...alignCenter}}>
                    <AnimatedFrame>
                        <Button href={releaseData.endpoint} label={`Click here to download latest version (${releaseData.tag})`}/>
                        <Button href={"https://github.com/4RTools/4RTools"} bgColor="black" label={`Github Project`}/>
                    </AnimatedFrame>
                </Col>
                <Col xs={12} style={alignCenter}>
                    <CText>Your 100% opensource Autopot, Autobuff, Skill Spammer, Macro and Switch for Ragnarok Online.</CText>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Hero