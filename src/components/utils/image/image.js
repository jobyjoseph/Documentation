import React from "react"
import styles from "./image.module.scss";

const Footer = (props) => {
  return (
    <div className={styles.wrapper} style={props.style}>
      <img src={props.src} alt={props.alt} />
      { props.caption? <div className={styles.caption}>{props.caption}</div> : null }
    </div>
  )
};

export default Footer
