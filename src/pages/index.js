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
        <h1>Articles</h1>
        <ol reversed className={styles.articleList}>
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
        </ol>
      </div>
    </div>
  </Layout>
)

export default IndexPage
