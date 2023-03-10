import React from 'react'
import { Button } from '../ButtonElements'
import {
    Collumn2,
    ImgWrap,
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Collumn1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Img
} from './InfoElements'


const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2 }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Collumn1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to="home" smooth={true} duration = {500} spy={true} exact = "true" offset = {-80}  primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0} >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Collumn1>
                        <Collumn2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Collumn2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection