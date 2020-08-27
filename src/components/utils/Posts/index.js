import React from "react"
import { Link } from "gatsby"
import styles from "./style.module.scss";

function Posts(props) {
  return (
    <div className={styles.postsWrapper}>
      <h3>JavaScript</h3>
      <ul>
        <li>
          <Link to="/javascript/introduction">Introduction</Link>
        </li>
        <li>
          <Link to="/javascript/data-types">Data Types</Link>
        </li>
        <li>
          <Link to="/javascript/variables">Variables</Link>
        </li>
        <li>
          <Link to="/javascript/quiz-variables">Quiz: Variables</Link>
        </li>
        <li>
          <Link to="/javascript/operators">Operators</Link>
        </li>
        <li>
          <Link to="/javascript/arrays">Arrays</Link>
        </li>
        <li>
          <Link to="/javascript/quiz-arrays">Quiz: Arrays</Link>
        </li>
        <li>
          <Link to="/javascript/es2020-new-features">ES2020 New Features</Link>
        </li>
        <li>
          <Link to="/javascript/es2021-new-features">ES2021 New Features</Link>
        </li>
        <li>
          <Link to="/javascript/questions">JavaScript Questions</Link>
        </li>
      </ul>

      <h3>Articles</h3>

      <ul>
        <li>
          <Link to="/blog/empty-shallowwrapper-snapshot-jest-enzyme">SOLVED: Empty ShallowWrapper Snapshot Object in Jest and Enzyme</Link> - Aug 26, 2020
        </li>
        <li>
          <Link to="/blog/react-native-vs-native-apps">React Native vs Native Apps</Link> - Jun 4, 2020
        </li>
        <li>
          <Link to="/blog/deno-installation">How to Install Deno</Link> - Jun 2, 2020
        </li>
        <li>
          <Link to="/blog/react-hello-world-app-without-jsx">Hello World App Using React Without JSX</Link> - May 29, 2020
        </li>
        <li>
          <Link to="/blog/write-your-first-react-app">Write Your First React App</Link> - May 29, 2020
        </li>
        <li>
          <Link to="/blog/react-bootstrap-controllabel-warning">SOLVED: ControlLabel from React Bootstrap throws Warning</Link> - Feb 19, 2020
        </li>
        <li>
          <Link to="/blog/create-react-app-setuptests-js-not-working">SOLVED: setupTests.js not working in CreateReactApp</Link> - Feb 6, 2020
        </li>
      </ul>
    </div>
  );
}

export default Posts;
