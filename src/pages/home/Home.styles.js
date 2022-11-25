import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 15vw;
`

export const ContentContainer = styled.div`
  margin: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 50px;
  z-index: 1;
`

export const HeroLeft = styled.div`
  margin: 30px 10px;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  float: left;
  opacity: 0.7;
`

export const HeroRight = styled.div`
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
  font-size: 50px;
  margin: 0;
  letter-spacing: 3px;
`

export const Role = styled.p`
  font-size: 20px;
  letter-spacing: 3px;
`

export const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: black;
  border-radius: 50%;
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

export const Button = styled.button`
  width: 150px;
  border: 1px solid #08fdd8;
  color: #08fdd8;
  background: transparent;
  margin: 20px;
  padding: 20px;
  cursor: pointer;
  font-size: 20px;
`
