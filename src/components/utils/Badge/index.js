import React from "react"
import styles from "./style.module.scss";

function Badge(props) {
  return (
    <div className={styles.badgeWrapper}>
      <div className={styles.imageWrapper}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={styles.technologyWrapper}>
        <div className={styles.technologyName}>{props.name}</div>
        <div className={styles.technologyVersion}>{props.version}</div>
      </div>
    </div>
  );
}

export default Badge;
