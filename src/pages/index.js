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
          1. <Link to="/javascript/introduction">Introduction</Link>
        </div>
        <div className={styles.gridItem}>
          2. <Link to="/javascript/variables">Variables</Link>
        </div>
        <div className={styles.gridItem}>
          3. <Link to="/javascript/boolean-data-type">Boolean Data Type</Link>
        </div>
        <div className={styles.gridItem}>
          4. <Link to="/javascript/symbol-data-type">Symbol Data Type</Link>
        </div>
        <div className={styles.gridItem}>
          5. <Link to="/javascript/spread-operator">Spread Operator</Link>
        </div>
        <div className={styles.gridItem}>
          6. <Link to="/javascript/objects">Objects</Link>
        </div>
        <div className={styles.gridItem}>
          7. <Link to="/javascript/prototypes">Prototypes</Link>
        </div>
        <div className={styles.gridItem}>
          8. <Link to="/javascript/callbacks">Callbacks</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
