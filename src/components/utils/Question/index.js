import React from "react";
import styles from "./style.module.scss";

function Question(props) {
  return (
    <div className={styles.questionContainer}>
      {props.children}
    </div>
  );
}

export default Question;
