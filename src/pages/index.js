import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => (
  <div>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </div>
)

export const query = graphql`
  {
    markdownRemark {
      html
    }
  }
`
