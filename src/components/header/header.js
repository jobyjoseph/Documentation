import { Link } from "gatsby"
import React from "react"
import logo from "../../images/logo.png";
import styles from "./header.module.scss";

const Header = (props) => (
  <header>
    <div className={styles.container}>
      <Link to="/">
        <img src={logo} alt="Backbencher.dev" className={styles.logo}/>
        <span className={styles.logoText}>backbencher.dev</span>
      </Link>
    </div>
  </header>
);

export default Header
