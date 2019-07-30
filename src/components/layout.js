/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import "../styles/normalize.css";
import "./layout.css"
import nahtBlocksImg from "../images/naht-blocks.png"
import Header from "./header"
import Footer from "./footer"

const FullContainer = styled.div`
  height: 100%;
  min-height: 100%;

  ${props => props.background && `
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${nahtBlocksImg});
  `}
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: 980px;
  padding: 0 16px;
`;

const Layout = ({ background, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <FullContainer background={background}> 
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer />
    </FullContainer>
  )
}

Layout.propTypes = {
  background: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Layout
