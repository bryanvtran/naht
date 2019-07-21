import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

// internal components
import FacebookIcon from './icons/facebook-icon';
import InstagramIcon from './icons/instagram-icon';
import SoundCloudIcon from './icons/soundcloud-icon';
import YoutubeIcon from './icons/youtube-icon';

const navStyles = `
  display: inline-block;

  @media (max-width: 480px) {
    display: block;
  }
`;

const SocialDiv = styled.div`
  ${navStyles}
`;

const StyledHeader = styled.header`
  padding: 2rem 0;
  text-align: center;
`;

const StyledNav = styled.nav`
  ${navStyles}
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0 0 1rem;
  padding: 0;
`;

const NavItem = styled.li`
  display: inline-block;
  padding: ${props => props.social ? ' 0 6px' : '0 8px'};
  
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    opacity: .75;
    transition: 0.125s;
  }
`;

const Header = () => (
  <StyledHeader>
    <StyledNav>
      <NavList>
        <NavItem>
          <NavLink to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">
            Music
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">
            Merch
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">
            Contact
          </NavLink>
        </NavItem>
      </NavList>
    </StyledNav>
    <SocialDiv>
      <NavList>
        <NavItem social={true}>
          <NavLink to="/">
            <FacebookIcon />
          </NavLink>
        </NavItem>
        <NavItem social={true}>
          <NavLink to="/">
            <InstagramIcon />
          </NavLink>
        </NavItem>
        <NavItem social={true}>
          <NavLink to="/">
            <YoutubeIcon />
          </NavLink>
        </NavItem>
        <NavItem social={true}>
          <NavLink to="/">
            <SoundCloudIcon />
          </NavLink>
        </NavItem>
      </NavList>
    </SocialDiv>
  </StyledHeader>
)

export default Header
