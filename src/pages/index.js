import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cards from "../components/projectCard"

const IndexPage = () => (
  <Layout className="App">
    <SEO title="Home" />
    <Cards />
  </Layout>
)

export default IndexPage
