import React from 'react'

const InfoSection = () => {
    return (
        <>
            <InfoContainer id={id}>
                <InfoWrapper>
                    <InfoRow>
                        <Collumn1>
                            <TextWrapper>
                                <TopLine>Topline</TopLine>
                                <Heading>Heading</Heading>
                                <Subtitle>Subtitle</Subtitle>
                                <BtnWrap>
                                    <Button to="home">Button</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Collumn1>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection