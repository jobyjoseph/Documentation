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
import jsLogoImage from "../../images/javascript-logo.png";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="sidebar">
        <Badge image={jsLogoImage} name="JavaScript" version="v11 - ES2020"/>
        <ul>
          <li>
            <Link to="/javascript/introduction-to-javascript">Introduction</Link>
          </li>
        </ul>
        <h4>JavaScript Basics</h4>
        <ul>
          <li>
            <Link to="/javascript/values">Values</Link>
          </li>
          <li>
            <Link to="/javascript/types-in-javascript">JavaScript Types</Link>
          </li>
          <li>
            <Link to="/javascript/boolean">JavaScript Boolean</Link>
          </li>
          <li>
            <Link to="/javascript/bigint">JavaScript BigInt</Link>
          </li>
          <li>
            <Link to="/javascript/string-matchall">JavaScript String MatchAll</Link>
          </li>
          <li>
            <Link to="/javascript/dynamic-import">JavaScript Dynamic Import</Link>
          </li>
          <li>
            <Link to="/javascript/nullish-coalescing-operator">JavaScript Nullish Coalescing</Link>
          </li>
          <li>
            <Link to="/javascript/optional-chaining">JavaScript Optional Chaining</Link>
          </li>
          <li>
            <Link to="/javascript/globalthis">JavaScript globalThis</Link>
          </li>
        </ul>
        <h4>JavaScript Advanced</h4>
        <ul>
          <li>
            <Link to="/javascript/closures-in-javascript">JavaScript Closures</Link>
          </li>
          <li>
            <Link to="/javascript/promises">JavaScript Promises</Link>
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
