import styled from 'styled-components'
import colors from '../../utils/colors'
//import { breakpoints as bp } from '../../utils/layout'

export const CardContainer = styled.div`
  width: 250px;
  height: 350px;
  margin: 10px;
  background: ${colors.gray};
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.neonGreen};

  &:hover {
    margin-top: -20px;
    margin-bottom: 20px;
    transition: 1s;
  }
`
export const ImageContainer = styled.div`
  width: 250px;
  height: 200px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: black;
`

export const CardTextsContainer = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Name = styled.h1`
  display: flex;
  font-size: 10px;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  color: ${colors.offWhite};
`
export const Tech = styled.h1`
  display: flex;
  font-size: 10px;
  justify-content: center;
  text-align: center;
  color: ${colors.offWhite};
  padding: 5px;
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
    color: ${colors.offWhite};

    &:hover {
      color: ${colors.neonGreen};
    }
  }
`
