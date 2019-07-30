import React from "react";
import { Link } from "gatsby"
import styled from "@emotion/styled"

import MailIcon from "./icons/mail-icon";

const StyledFooter = styled.footer`
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem 0;
    position: fixed;
    text-align: center;
`;

const MailingLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    opacity: .75;
    transition: 0.125s;
  }
`;

const MailIconContainer = styled.span`
    margin-right: 6px;
`;

const Footer = () => (
    <StyledFooter>
        <MailingLink to="/">
            <MailIconContainer>
                <MailIcon /> 
            </MailIconContainer>
            Join mailing list
        </MailingLink>
    </StyledFooter>
)

export default Footer