import * as React from "react"

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
    Message from strapi :
    <StaticQuery
      query={query}
      render={data => (
        <div>
          <h1>{data.allStrapiHelloworld.edges[0].node.helloText}</h1>
        </div>
      )}
    />
  </div>
)

export default IndexPage
