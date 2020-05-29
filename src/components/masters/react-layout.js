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
import reactLogoImage from "../../images/react-logo.png";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="sidebar">
        <Badge image={reactLogoImage} name="React" version="v16.13"/>
        <h4>React Basics</h4>
        <ul>
          <li>
            <Link to="/react/introduction-to-react">React Introduction</Link>
          </li>
          <li>
            <Link to="/react/hello-world-app">React Hello World</Link>
          </li>
          <li>
            <Link to="/react/write-your-first-react-app">React Getting Started</Link>
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
