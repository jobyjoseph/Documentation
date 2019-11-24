import React from "react"
import styles from "./footer.module.scss";

const Footer = (props) => (
  <footer>
    <div className={styles.copyright}>
      &copy; backbencher.dev
    </div>
  </footer>
);

export default Footer
