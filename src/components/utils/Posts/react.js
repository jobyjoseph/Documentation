import React from "react"
import { Link } from "gatsby"
import styles from "./style.module.scss"

export default function(props) {
  return (
    <div className={styles.postsWrapper}>
      <h4>React Articles</h4>
      <ul>
        <li>
          <Link to="/react/basic-interview-questions">React Basic Interview Questions</Link>
        </li>
        <li>
          <Link to="/react/code-splitting-lazy-suspense-interview-questions">React Code-Splitting, Lazy, Suspense Interview Questions</Link>
        </li>
        <li>
          <Link to="/react/context-api-interview-questions">React Context API Interview Questions</Link>
        </li>
        <li>
          <Link to="/react/hooks-interview-questions">React Hooks Interview Questions</Link>
        </li>
        <li>
          <Link to="/react/refs-interview-questions">React Refs Interview Questions</Link>
        </li>
        <li>
          <Link to="/react/render-props-interview-questions">React Render Props Interview Questions</Link>
        </li>
      </ul>
    </div>
  )
}
