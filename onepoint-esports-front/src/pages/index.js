import * as React from "react"
import Footer from "../components/footer"
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
    <Footer />
  </div>
)

export default IndexPage
