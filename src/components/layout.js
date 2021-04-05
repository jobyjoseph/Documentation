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
import GoogleAds from "./utils/GoogleAds";
import styles from "./layout.module.scss";

const Layout = ({ children }) => {

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/sut3opv.css" />
        <script src="https://chimpstatic.com/mcjs-connected/js/users/46e3529af04e73e3a37742ae8/787188458634130b24778b31b.js" async></script>
      </Helmet>
      <Header/>
      <div className={styles.adContainer}>
        <GoogleAds slot="9034656808" />
      </div>
      <div>
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
