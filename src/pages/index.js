import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/index.module.scss";

import Badge from "../components/utils/Badge";
import Posts from "../components/utils/Posts";
import jsLogoImage from "../images/javascript-logo.png";
import reactLogoImage from "../images/react-logo.png";
import denoLogoImage from "../images/deno-logo.jpg";

const IndexPage = () => (
  <Layout>
    <SEO title="Learn JavaScript in Depth" />
    <div className="container">
      <div className="contentBox">
        <Posts />
      </div>
    </div>
  </Layout>
)

export default IndexPage
