import styled from 'styled-components'
import { breakpoints as bp } from '../../utils/layout'
import colors from '../../utils/colors'

export const NavbarContainer = styled.nav`
  width: 100vw;
  height: 10vh;
  background: #0a192f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1;
`

export const BrandContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 30px;

  > a {
    text-decoration: none;
  }
`
export const BrandLinkItem = styled.div`
  display: flex;
  color: #e6f1ff;
  font-size: 25px;
  padding: 0 30px;
`
export const BrandSubtext = styled.div`
  display: flex;
  color: ${colors.offWhite};
  font-size: 13px;
  justify-content: center;
`

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 20px;
  padding: 5px;
  color: ${colors.offWhite};
  font-size: 30px;

  @media (min-width: ${bp.lg}) {
    display: none;
  }
`

export const LinkItemContainer = styled.div`
 display: flex;
 justify-content: center
 align-items:center
 margin:20px ;

 > a {
  text-decoration: none;
 }

`
export const LinkItem = styled.h1`
  color: #e6f1ff;
  margin: 10px 10px;
  padding: 10px 20px;
  font-size: 20px;
  letter-spacing: 3px;
`

export const MenuContainer = styled.div`
  display: flex;
  padding: 0 30px;
`

export const MobileMenuContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  left: 0;
  top: 10vh;
  width: 100%;
  height: 100vh;
  background: #0a192f;
  transform: translateX(0%);
  transition: transform 0.3s ease-out;
  z-index: 1;

  &.active {
    transform: translateX(-100%);
    transition: transform 0.3s ease-in;
  }
`
export const CloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 10px;
`
export const MobileNavbarLinks = styled.div`
  display: flex;
  flex-direction: column;
`

export const NavbarLinks = styled.div`
  display: none;

  @media (min-width: ${bp.lg}) {
    display: flex;
    flex-direction: row;
  }
`
