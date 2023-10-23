import React from 'react'
import styled, {keyframes} from 'styled-components'
import theme from '@theme'
import Image from '@components/Image'
import { Col, Container, Row } from 'react-grid-system'
import {fadeInUp} from 'react-animations'

const fadeAnimation = keyframes`${fadeInUp}`;

interface ISectionProps {
    title: string;
    guide: string;
    gif?: string;
    tips?: string[];
    video?:string;
}

const SAutopotSection = styled.div`
    background-color: ${theme.primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

const STitleSection = styled.div`
    background-color: ${theme.secondaryColor};
    padding: 30px;
    text-align: center;
`

const SSpan = styled.span`
    font-family: "Globotipo Variable";
    font-size: 2rem;
    font-weight: bolder;
    color: #fff;
`

const SpanContainer = styled.div`
    border-radius: 4px;
    background-color: ${theme.secondaryColor};
    padding: 10px;
    margin-bottom: 10px;
`

const SSpanSmall = styled.span`
    font-family: "Globotipo Variable";
    font-size: 1rem;
    font-weight: bolder;
    color: #fff;
`

const AnimatedFrame = styled.div`
    animation: 0.5s ${fadeAnimation};
`


const Section = (props: ISectionProps) => {

    return (
        <>
            <STitleSection>
                <SSpan>{props.title}</SSpan>
            </STitleSection>
            <SAutopotSection>
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <AnimatedFrame>
                                <Image style={{"width": "100%", "boxShadow": "12px 10px 30px black"}} src={props.guide}/>
                            </AnimatedFrame>
                        </Col>
                        <Col xs={12} md={2}>
                            {props.tips && props.tips.map((tip: string, key: number) =>
                            <SpanContainer key={key}>
                                <SSpanSmall>{tip}</SSpanSmall><br/>
                            </SpanContainer>
                            )}
                        </Col>
                        <Col xs={12} md={6}>
                            <AnimatedFrame>
                                {props.video ? 
                                <video style={{"width": "100%","borderRadius": "10px", "boxShadow": "12px 10px 30px black"}} playsInline autoPlay muted loop src={props.video}/> :
                                <Image style={{"width": "100%","borderRadius": "10px", "boxShadow": "12px 10px 30px black"}} src={props.gif}/>}
                            </AnimatedFrame>
                        </Col>
                    </Row>
                </Container>
            </SAutopotSection>
        </>
    )
}

export default Section