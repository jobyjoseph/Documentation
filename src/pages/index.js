import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/utils/Posts";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Learn JavaScript in Depth" />
      <div className="container">
        <div className="contentBox">
          <Posts />
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage
