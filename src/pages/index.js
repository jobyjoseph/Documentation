import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from "../styles/index.module.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Learn JavaScript and Node.js" />
    <div className="container">
      <h3 className={styles.sectionHeader}>JavaScript</h3>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <Link to="/javascript/introduction">Introduction</Link>
        </div>
        <div className={styles.gridItem}>
          <Link to="/javascript/variables">Variables</Link>
        </div>
        <div className={styles.gridItem}>
          <Link to="/javascript/boolean-data-type">Boolean Data Type</Link>
        </div>
        <div className={styles.gridItem}>
          <Link to="/javascript/symbol-data-type">Symbol Data Type</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
