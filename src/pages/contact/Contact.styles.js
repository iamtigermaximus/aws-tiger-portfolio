import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10vh;
  color: white;

  @media (min-width: ${bp.lg}) {
    padding-left: 15vw;
    padding-top: 0;
  }
`

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  letter-spacing: 3px;
  color: #08fdd8;

  @media (min-width: ${bp.lg}) {
    font-size: 70px;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${bp.lg}) {
    margin: 30px;
  }
`

export const Caption = styled.h1`
  font-size: 15px;
  padding: 10px;

  @media (min-width: ${bp.lg}) {
    font-size: 30px;
    padding: 0 30px;
    letter-spacing: 3px;
  }
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

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const Input = styled.input`
  width: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background: #404040;
  font-size: 15px;
  color: white;

  &:focus {
    outline: none;
  }

  @media (min-width: ${bp.lg}) {
    width: 500px;
    padding: 20px;
  }
`

export const Label = styled.label`
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  font-size: 13px;

  @media (min-width: ${bp.lg}) {
    font-size: 16px;
  }
`
export const TextArea = styled.textarea`
  width: 300px;
  padding: 10px;
  background: #404040;
  color: white;
  font-size: 15px;

  &:focus {
    outline: none;
  }

  @media (min-width: ${bp.lg}) {
    width: 500px;
    padding: 20px;
  }
`
export const Button = styled.button`
  width: 150px;
  border: 1px solid #08fdd8;
  color: #08fdd8;
  background: transparent;
  margin: 20px;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  box-shadow: inset 0 0 0 0 #08fdd8;
  transition: color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;

  &: hover {
    color: #08fdd8;
    box-shadow: inset 200px 0 0 0 #08fdd8;
    color: black;
  }
  @media (min-width: ${bp.lg}) {
    padding: 20px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
