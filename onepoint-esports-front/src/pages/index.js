import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "../components/header"

const query = graphql`
  query {
    allStrapiHelloworld {
      edges {
        node {
          helloText
        }
      }
    }
  }
`

const IndexPage = () => (
  <div>
    <Header />
  </div>
)

export default IndexPage
