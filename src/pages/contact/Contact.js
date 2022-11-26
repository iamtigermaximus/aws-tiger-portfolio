import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'
import Particle from '../../components/Particle'

export const Container = styled.div`
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  background-color: #1d1d1d;
  align-items: center;
  padding-left: 15vw;
`

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`
export const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  letter-spacing: 3px;
  color: #08fdd8;
`

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeroLeft = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  float: left;
  opacity: 0.7;
`
export const LeftContentContainer = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  letter-spacing: 3px;
`

export const RightContentContainer = styled.div`
  margin: 30px 10px;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Greet = styled.h1`
  font-size: 30px;
  margin: 0;
  letter-spacing: 3px;
`

export const Name = styled.h1`
  font-size: 70px;
  margin: 0;
  letter-spacing: 3px;
  color: #08fdd8;
`

export const Caption = styled.h1`
  font-size: 30px;
  padding: 0 30px;
  letter-spacing: 3px;
`

export const Role = styled.p`
  font-size: 20px;
  letter-spacing: 3px;
`

export const ImageContainer = styled.div`
  width: 300px;
  height: 400px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: black;
  border: 1px solid #08fdd8;
`

export const TechContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const TechItem = styled.div`
  margin: 10px;
  font-size: 20px;

  &:hover {
    color: #08fdd8;
    transform: scale(1.5);
    font-weight: 700;
  }
`

export const Form = styled.form`
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  margin: 0 70px;
`
export const Input = styled.input`
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: #404040;
  font-size: 15px;
  color: white;

  &:focus {
    outline: none;
  }
`

export const Label = styled.label`
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
`
export const TextArea = styled.textarea`
  padding: 10px;
  background: #404040;
  color: white;
  font-size: 15px;

  &:focus {
    outline: none;
  }
`
export const Button = styled.button`
  width: 150px;
  border: 1px solid #08fdd8;
  color: #08fdd8;
  background: transparent;
  margin: 20px;
  padding: 20px;
  cursor: pointer;
  font-size: 20px;
  box-shadow: inset 0 0 0 0 #08fdd8;
  transition: color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

  &: hover {
    color: #08fdd8;
    box-shadow: inset 200px 0 0 0 #08fdd8;
    color: black;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

// const Container = styled.div`
//   height: 100vh;
//   color: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #1d1d1d;
//   padding-left: 15vw;
// `

const Contact = () => {
  return (
    <Container>
      <Particle />
      <ContentContainer>
        <HeroLeft>
          <LeftContentContainer>
            <Fade direction='down'>
              <HeadingContainer>
                <Heading>Contact me</Heading>
              </HeadingContainer>
              <Caption>Want to work together or have any questions?</Caption>
            </Fade>
            <Fade direction='left'>
              <Form>
                <Label>Name</Label>
                <Input />
                <Label>Email</Label>
                <Input />
                <Label>Subject</Label>
                <Input />
                <Label>Message</Label>
                <TextArea cols='30' rows='5' />
                <ButtonContainer>
                  <Button>Send</Button>
                </ButtonContainer>
              </Form>
            </Fade>
          </LeftContentContainer>
        </HeroLeft>
      </ContentContainer>
    </Container>
  )
}

export default Contact
