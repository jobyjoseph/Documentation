import React from "react"
import { Link } from "gatsby"
import styles from "./style.module.scss";

function Posts(props) {
  return (
    <div className={styles.postsWrapper}>
      <ul>
        <li>
          <Link to="/javascript/introduction">Introduction to JavaScript</Link>
        </li>
        <li>
          <Link to="/javascript/variables">Variables</Link>
        </li>
        <li>
          <Link to="/javascript/data-types">Data Types</Link>
        </li>
        <li>
          <Link to="/javascript/questions">JavaScript Questions</Link>
        </li>
        <li>
          <Link to="/javascript/values">Values</Link>
        </li>
        <li>
          <Link to="/javascript/operators">Operators</Link>
        </li>
        <li>
          <Link to="/javascript/spread-operator">Spread Operator</Link>
        </li>
        <li>
          <Link to="/javascript/string">String</Link>
        </li>

        <li>
          <Link to="/javascript/if-else">If-else</Link>
        </li>
        <li>
          <Link to="/javascript/array">Array</Link>
        </li>
        <li>
          <Link to="/javascript/function">Function</Link>
        </li>
        <li>
          <Link to="/javascript/object">Object</Link>
        </li>
        <li>
          <Link to="/javascript/globalthis">JavaScript globalThis</Link>
        </li>
        <li>
          <Link to="/javascript/string-matchall">JavaScript String MatchAll</Link>
        </li>
        <li>
          <Link to="/javascript/promises">JavaScript Promises</Link>
        </li>
        <li>
          <Link to="/javascript/optional-chaining">JavaScript Optional Chaining</Link>
        </li>
        <li>
          <Link to="/javascript/nullish-coalescing-operator">JavaScript Nullish Coalescing</Link>
        </li>
        <li>
          <Link to="/javascript/dynamic-import">JavaScript Dynamic Import</Link>
        </li>
        <li>
          <Link to="/javascript/bigint">JavaScript BigInt</Link>
        </li>
        <li>
          <Link to="/javascript/closures">JavaScript Closures</Link>
        </li>
        <li>
          <Link to="/javascript/es2021-new-features">New Features in ES2021</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link to="/deno/installation">Deno Installation</Link>
        </li>
        <li>
          <Link to="/react/hello-world-app">Hello World App Using React</Link>
        </li>
        <li>
          <Link to="/react/write-your-first-react-app">Write Your First React App</Link>
        </li>
        <li>
          <Link to="/react-bootstrap-controllabel-warning">SOLVED: ControlLabel from React Bootstrap throws Warning</Link>
        </li>
        <li>
          <Link to="/create-react-app-setuptests-js-not-working">SOLVED: setupTests.js not working in CreateReactApp</Link>
        </li>
        <li>
          <Link to="/javascript-interview-questions">JavaScript Interview Questions</Link>
        </li>
        <li>
          <Link to="/es2020-new-features">ES2020 New Features</Link>
        </li>
        <li>
          <Link to="/callbacks-in-javascript">Callbacks in JavaScript</Link>
        </li>
        <li>
          <Link to="/prototypes-in-javascript">Prototypes in JavaScript</Link>
        </li>
        <li>
          <Link to="/objects-in-javascript">Objects in JavaScript</Link>
        </li>
        <li>
          <Link to="/destructuring-in-javascript">Destructuring in JavaScript</Link>
        </li>
        <li>
          <Link to="/spread-operator-in-javascript">Spread Operator in JavaScript</Link>
        </li>
        <li>
          <Link to="/symbol-data-type-in-javascript">Symbol Data Type in JavaScript</Link>
        </li>
        <li>
          <Link to="/variables-in-javascript">Variables in JavaScript</Link>
        </li>
      </ul>
    </div>
  );
}

export default Posts;
