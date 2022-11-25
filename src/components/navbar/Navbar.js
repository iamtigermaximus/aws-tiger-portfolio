import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import {
  NavbarContainer,
  BrandContainer,
  LinkItemContainer,
  LinkItem,
  BrandLinkItem,
  MenuContainer,
  NavbarLinks,
  BurgerMenu,
  MobileMenuContainer,
  MobileNavbarLinks,
} from './Navbar.styles'

const Navbar = () => {
  const [click, setClick] = useState(true)
  const categoryMenu = () => setClick(!click)

  return (
    <NavbarContainer>
      <BrandContainer>
        <Link to='/'>
          <BrandLinkItem>SIEGFRED GAMBOA</BrandLinkItem>
        </Link>
      </BrandContainer>

      <MenuContainer>
        <NavbarLinks>
          <LinkItemContainer>
            <Link to='/'>
              <LinkItem>Home</LinkItem>
            </Link>
          </LinkItemContainer>
          <LinkItemContainer>
            <Link to='/about'>
              <LinkItem>About</LinkItem>
            </Link>
          </LinkItemContainer>

          <LinkItemContainer>
            <Link to='/portfolio'>
              <LinkItem>Portfolio</LinkItem>
            </Link>
          </LinkItemContainer>
          <LinkItemContainer>
            <Link to='/contact'>
              <LinkItem>Contact</LinkItem>
            </Link>
          </LinkItemContainer>
        </NavbarLinks>
        <BurgerMenu onClick={categoryMenu}>
          {click ? <FaBars /> : <FaTimes />}
          <MobileMenuContainer
            className={click ? 'category active' : 'category'}
            onClick={categoryMenu}
          >
            <MobileNavbarLinks>
              <LinkItemContainer>
                <Link to='/'>
                  <LinkItem>Home</LinkItem>
                </Link>
              </LinkItemContainer>
              <LinkItemContainer>
                <Link to='/about'>
                  <LinkItem>About</LinkItem>
                </Link>
              </LinkItemContainer>

              <LinkItemContainer>
                <Link to='/portfolio'>
                  <LinkItem>Portfolio</LinkItem>
                </Link>
              </LinkItemContainer>
              <LinkItemContainer>
                <Link to='/contact'>
                  <LinkItem>Contact</LinkItem>
                </Link>
              </LinkItemContainer>
            </MobileNavbarLinks>
          </MobileMenuContainer>
        </BurgerMenu>
      </MenuContainer>
    </NavbarContainer>
  )
}

export default Navbar
