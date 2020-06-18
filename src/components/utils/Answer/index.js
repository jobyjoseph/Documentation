import React, {useState} from "react";
import styles from "./style.module.scss";

function Answer(props) {

  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className={styles.answerBox}>
      <button className={styles.answerButton} onClick={() => setShowAnswer(!showAnswer)}>{showAnswer ? "Hide Answer" : "View Answer"}</button>
      {showAnswer ? (<p>
        {props.children}
      </p>) : null}
    </div>
  );
}

export default Answer;
