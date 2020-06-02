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
import denoLogoImage from "../../images/deno-logo.jpg";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="sidebar">
        <Badge image={denoLogoImage} name="Deno" version="v1.0"/>
        <h4>Deno Basics</h4>
        <ul>
          <li>
            <Link to="/deno/installation">Deno Installation</Link>
          </li>
        </ul>
      </div>
      <div className="contentArea">
        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
