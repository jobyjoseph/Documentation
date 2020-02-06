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
            <Link to="/javascript/interview-questions-1">JavaScript Interview Questions</Link>
          </li>
          <li>
            <Link to="/javascript/es2020-new-features">ES2020 New Features</Link>
          </li>
          <li>
            <Link to="/javascript/promises">Promises in JavaScript</Link>
          </li>
          <li>
            <Link to="/javascript/callbacks">Callbacks in JavaScript</Link>
          </li>
          <li>
            <Link to="/javascript/prototypes">Prototypes in JavaScript</Link>
          </li>
          <li>
            <Link to="/javascript/objects">Objects in JavaScript</Link>
          </li>
          <li>
            <Link to="/javascript/destructuring">Destructuring in JavaScript</Link>
          </li>
          <li>
            <Link to="/javascript/spread-operator">Spread Operator in JavaScript</Link>
          </li>
          <li>
            <Link to="/javascript/symbol-data-type">Symbol Data Type in JavaScript</Link>
          </li>
          <li>
            <Link to="/javascript/string-data-type">String Data Type in JavaScript</Link>
          </li>
          <li>
            <Link to="/javascript/number-data-type">Number Data Type in JavaScript</Link>
          </li>  
          <li>
            <Link to="/javascript/boolean-data-type">Boolean Data Type in JavaScript</Link>
          </li>
          <li>
            <Link to="/javascript/variables">Variables in JavaScript</Link>
          </li>
          <li>
            <Link to="/javascript/introduction">Introduction to JavaScript</Link>
          </li>
        </ol>
      </div>
    </div>
  </Layout>
)

export default IndexPage
