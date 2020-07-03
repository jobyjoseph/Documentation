import React from "react"
import styles from "./style.module.scss";

function QuizBox(props) {
  return (
    <div className={styles.quizBox}>
      <div className={styles.header} >
        <div className={styles.title}>
          {props.title}
        </div>
        <div className={styles.questionNumber}>
          Question: 1/10
        </div>
      </div>
      <div className={styles.questionContainer}>
        <div className={styles.question}>
          {props.children}
        </div>
        <div className={styles.option}>
          "A", "A"
        </div>
        <div className={styles.option}>
          undefined, "A"
        </div>
        <div className={styles.option}>
          "A", undefined
        </div>
        <div className={styles.option}>
          Syntax Error: b is not declared
        </div>
      </div>
      <div className={styles.footer}>
        <div>
          <button className={styles.btn}>Previous</button>
        </div>
        <div>
          <button className={styles.btn}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default QuizBox;
