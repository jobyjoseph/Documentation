/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="grid-2">
        <div className="col-1">
          <div className="sidebarMenu">
            <h3>JavaScript</h3>
            <ul>
              <li><Link to="/javascript/introduction">Introduction</Link></li>
              <li><Link to="/javascript/variables">Variables</Link></li>
              <li><Link to="/javascript/boolean-data-type">Boolean Data Type</Link></li>
              <li><Link to="/javascript/number-data-type">Number Data Type</Link></li>
              <li><Link to="/javascript/string-data-type">String Data Type</Link></li>
              <li><Link to="/javascript/symbol-data-type">Symbol Data Type</Link></li>
              <li><Link to="/javascript/spread-operator">Spread Operator</Link></li>
              <li><Link to="/javascript/destructuring">Destructuring</Link></li>
              <li><Link to="/javascript/objects">Objects</Link></li>
              <li><Link to="/javascript/prototypes">Prototypes</Link></li>
              <li><Link to="/javascript/callbacks">Callbacks</Link></li>
              <li><Link to="/javascript/promises">Promises</Link></li>
              <li><Link to="/javascript/es2020-new-features">ES2020 New Features</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-2">{children}</div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
