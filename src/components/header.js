import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

// internal components
import FacebookIcon from './icons/facebook-icon';
import InstagramIcon from './icons/instagram-icon';
import TwitterIcon from './icons/twitter-icon';

const linkStyles = `
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    opacity: .75;
    transition: 0.125s;
  }
`;

const navStyles = `
  display: inline-block;

  @media (max-width: 480px) {
    display: block;
  }
`;

const SocialDiv = styled.div`
  ${navStyles}
`;

const SocialLink = styled.a`
  ${linkStyles}
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
  ${linkStyles}
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
          <NavLink to="/contact/">
            Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/rsvp/">
            RSVP/Guestlist
          </NavLink>
        </NavItem>
      </NavList>
    </StyledNav>
    <SocialDiv>
      <NavList>
        <NavItem social={true}>
          <SocialLink href="https://www.facebook.com/NAHTmusic" target="_blank">
            <FacebookIcon />
          </SocialLink>
        </NavItem>
        <NavItem social={true}>
          <SocialLink href="https://www.instagram.com/nahtmusic/" target="_blank">
            <InstagramIcon />
          </SocialLink>
        </NavItem>
        <NavItem social={true}>
          <SocialLink href="https://twitter.com/NAHTmusic" target="_blank">
            <TwitterIcon />
          </SocialLink>
        </NavItem>
      </NavList>
    </SocialDiv>
  </StyledHeader>
)

export default Header
