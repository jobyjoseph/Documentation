import React from "react"
import styles from "./image.module.scss";

const Footer = (props) => {
  return (
    <div className={styles.wrapper} style={props.style}>
      <img src={props.src} alt={props.alt} />
      <div className={styles.caption}>{props.caption}</div>
    </div>
  )
};

export default Footer
