/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Badge from "../utils/Badge";
import Posts from "../utils/Posts";
import jsLogoImage from "../../images/javascript-logo.png";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="contentArea">
        {children}
        <br/><br/>
        <strong>Other Articles:</strong>
        <br/><br/>
        <Posts/>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
