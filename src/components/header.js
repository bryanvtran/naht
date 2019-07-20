import { Link } from "gatsby"
import styled from "@emotion/styled"
import React from "react"

const Social = styled.div`
  display: inline-block;
`;

const StyledHeader = styled.header`
  padding: 2rem 0;
  text-align: center;
`;

const Nav = styled.nav`
  display: inline-block;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0 0 1rem;
  padding: 0;
`;

const NavItem = styled.li`
  display: inline-block;
  padding: 0 8px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;

  &:hover, &:focus {
    text-decoration: underline;
  }
`;

const Header = () => (
  <StyledHeader>
    <Nav>
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
    </Nav>
    <Social>
      <NavList>
        <NavItem>
          <NavLink to="/">
            FB
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">
            IG
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">
            YT
          </NavLink>
        </NavItem>
      </NavList>
    </Social>
  </StyledHeader>
)

export default Header
