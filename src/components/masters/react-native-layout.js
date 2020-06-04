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
        <Badge image={reactLogoImage} name="React Native" version="v0.62"/>
        <h4>React Native Basics</h4>
        <ul>
          <li>
            <Link to="/react-native/introduction">React Native Introduction</Link>
          </li>
          <li>
            <Link to="/react-native/expo">React Native Expo</Link>
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
