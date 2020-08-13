import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/index.module.scss"
import HomeLinks from "../components/utils/HomeLinks"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Learn JavaScript in Depth" />
      <div className={styles.container}>
        <HomeLinks />
      </div>
    </Layout>
  );
}

export default IndexPage
