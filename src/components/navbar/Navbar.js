import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import {
  NavbarContainer,
  BrandContainer,
  LinkItemContainer,
  LinkItem,
  BrandLinkItem,
  MenuContainer,
  NavbarLinks,
  // BurgerMenu,
  // MobileMenuContainer,
  // MobileNavbarLinks,
  SocialsContainer,
  Image,
  SocialItem,
} from './Navbar.styles'
import Logo from '../../assets/SG-logo.png'

const Navbar = () => {
  // const [click, setClick] = useState(true)
  // const categoryMenu = () => setClick(!click)

  return (
    <NavbarContainer>
      <BrandContainer>
        <Link to='/'>
          <BrandLinkItem>
            <Image src={Logo} />
          </BrandLinkItem>
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
      </MenuContainer>
      <SocialsContainer>
        <SocialItem>
          <a href='https://www.linkedin.com/in/siegfred-gamboa-5b1277218'>
            <FaLinkedin />
          </a>
        </SocialItem>
        <SocialItem>
          <a href='https://github.com/iamtigermaximus'>
            <FaGithub />
          </a>
        </SocialItem>
        <SocialItem>
          <a href='mailto:siegy.gamboa@gmail.com'>
            <MdEmail />
          </a>
        </SocialItem>
      </SocialsContainer>
    </NavbarContainer>
  )
}

export default Navbar
