import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/index.module.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="Learn JavaScript and Node.js" />
    <div className="container">
      <div className="contentBox">

        <h3>Deno</h3>
        <ul className={styles.articleList}>
          <li>
            <Link to="/how-to-install-deno">How to Install Deno</Link>
          </li>
        </ul>

        <h3>JavaScript Interview Questions</h3>
        <ul className={styles.articleList}>
          <li>
            <Link to="/javascript-execution-thread-interview-questions">JavaScript Execution Thread Interview Questions</Link>
          </li>
          <li>
            <Link to="/javascript-closures-interview-questions">JavaScript Closures Interview Questions</Link>
          </li>
          <li>
            <Link to="/javascript-destructuring-interview-questions">JavaScript Destructuring Interview Questions</Link>
          </li>
          <li>
            <Link to="/javascript-async-await-interview-questions">JavaScript Async Await Interview Questions</Link>
          </li>
        </ul>

        <h3>Articles</h3>
        <ul className={styles.articleList}>
          <li>
            <Link to="/salesforce-demandware-useful-links">Salesforce Demandware Useful Links</Link>
          </li>
          <li>
            <Link to="/salesforce-demandware-glossary">Salesforce Demandware Glossary</Link>
          </li>
          <li>
            <Link to="/salesforce-demandware-interview-questions">Salesforce Demandware Interview Questions</Link>
          </li>
          <li>
            <Link to="/react-bootstrap-controllabel-warning">SOLVED: ControlLabel from React Bootstrap throws Warning</Link>
          </li>
          <li>
            <Link to="/create-react-starter-webpack-babel">Create React Starter App using React 16, Webpack 4 and Babel 7</Link>
          </li>
          <li>
            <Link to="/write-your-first-react-app">Write Your First React App</Link>
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
            <Link to="/promises-in-javascript">Promises in JavaScript</Link>
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
            <Link to="/string-data-type-in-javascript">String Data Type in JavaScript</Link>
          </li>
          <li>
            <Link to="/number-data-type-in-javascript">Number Data Type in JavaScript</Link>
          </li>
          <li>
            <Link to="/boolean-data-type-in-javascript">Boolean Data Type in JavaScript</Link>
          </li>
          <li>
            <Link to="/variables-in-javascript">Variables in JavaScript</Link>
          </li>
          <li>
            <Link to="/introduction-to-javascript">Introduction to JavaScript</Link>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
