import React from "react"
import styles from "./footer.module.scss";

const Footer = (props) => (
  <footer>
    <div className={styles.copyright}>
      &copy; backbencher.dev - <a href="https://litmus7.com" target="_blank" rel="nofollow">Working in a Great Place</a>
    </div>
  </footer>
);

export default Footer
