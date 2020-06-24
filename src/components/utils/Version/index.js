import React from "react"
import styles from "./style.module.scss";

function Version(props) {
  return (
    <span className={styles.versionWrapper}>
      ES{props.number}
    </span>
  );
}

export default Version;
