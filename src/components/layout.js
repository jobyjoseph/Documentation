/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Header from "./header/header"
import Footer from "./footer/footer";
import styles from "./layout.module.scss"

const Layout = ({ children }) => {

  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Lora:700,400|Source+Sans+Pro:700,400&display=swap" rel="stylesheet"/>
      </Helmet>
      <Header/>
      <div className={styles.container}>
        <main>{children}</main>
      </div>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
