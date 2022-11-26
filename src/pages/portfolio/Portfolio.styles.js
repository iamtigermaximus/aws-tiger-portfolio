import styled from 'styled-components'
//import { breakpoints as bp } from '../../utils/layout'

export const Container = styled.div`
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1d1d1d;
  padding-left: 15vw;
  flex-direction: column;
`
export const PageContentContainer = styled.div``

export const ProjectContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding: 30px;
`
export const CardContainer = styled.div`
  width: 250px;
  height: 350px;
  margin: 10px;
  background: #404040;
  display: flex;
  flex-direction: column;
  border: 1px solid #08fdd8;
`
export const Name = styled.h1`
  display: flex;
  font-size: 10px;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  color: white;
`
export const Tech = styled.h1`
  display: flex;
  font-size: 10px;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 5px;
`
export const SubTexts = styled.div`
  display: flex;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  color: gray;
  letter-spacing: 1px;
`
export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: black;
`
export const ImageContainer = styled.div`
  width: 250px;
  height: 200px;
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
export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const DemoLink = styled.div`
  margin: 10px;

  > a {
    color: white;

    &:hover {
      color: #08fdd8;
    }
  }
`
export const CardTextsContainer = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
