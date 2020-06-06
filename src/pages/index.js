import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "../styles/index.module.scss";

import Badge from "../components/utils/Badge";
import jsLogoImage from "../images/javascript-logo.png";
import reactLogoImage from "../images/react-logo.png";
import denoLogoImage from "../images/deno-logo.jpg";

const IndexPage = () => (
  <Layout>
    <SEO title="Learn JavaScript and Node.js" />
    <div className="container">
      <div className="contentBox">
        <div className="homeGrid">
          <div className="homeBox">
            <Badge image={jsLogoImage} name="JavaScript" version="v11 - ES2020"/>
            <h4>JavaScript Recent</h4>
            <ul>
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
                <Link to="/javascript/introduction-to-javascript">JavaScript Introduction</Link>
              </li>
              <li>
                <Link to="/javascript/types-in-javascript">JavaScript Types</Link>
              </li>
              <li>
                <Link to="/javascript/boolean">JavaScript Boolean</Link>
              </li>
              <li>
                <Link to="/javascript/bigint">JavaScript BigInt</Link>
              </li>
            </ul>
            <h4>JavaScript Advanced</h4>
            <ul>
              <li>
                <Link to="/javascript/closures-in-javascript">JavaScript Closures</Link>
              </li>
            </ul>
          </div>
          <div className="homeBox">
            <Badge image={reactLogoImage} name="React" version="v16.13"/>
            <h4>React Basics</h4>
            <ul>
              <li>
                <Link to="/react/introduction-to-react">React Introduction</Link>
              </li>
              <li>
                <Link to="/react/hello-world-app">React Hello World</Link>
              </li>
              <li>
                <Link to="/react/write-your-first-react-app">React Getting Started</Link>
              </li>
            </ul>
          </div>
          <div className="homeBox">
            <Badge image={denoLogoImage} name="Deno" version="v1.0"/>
            <h4>Deno Basics</h4>
            <ul>
              <li>
                <Link to="/deno/installation">Deno Installation</Link>
              </li>
            </ul>
          </div>
        </div>

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
