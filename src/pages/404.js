import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Heading = styled.h1`
  text-align: center;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Heading>PAGE NOT FOUND</Heading>
  </Layout>
)

export default NotFoundPage
