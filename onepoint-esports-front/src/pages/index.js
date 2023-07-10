import * as React from "react"
import Footer from "../components/footer"

import { StaticQuery, graphql } from "gatsby"

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
    <Footer />
  </div>
)

export default IndexPage
