import React from "react"
import { Link } from "gatsby"
import styles from "./style.module.scss"

function Posts(props) {
  return (
    <div className={styles.postsWrapper}>
      <ul>
        <li>
          <Link to="/javascript/js-daily-7-block-scoped-let">JS Daily #7 - Block Scoped Let</Link>{" "}
          - Feb 24, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-6-settimeout-asynchronous">JS Daily #6 - SetTimeout and Callstack</Link>{" "}
          - Feb 23, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-5-nullish-coalescing-operator">JS Daily #5 - Boolean Value With Nullish Coalescing Operator</Link>{" "}
          - Feb 22, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-4-truthy-empty-object">JS Daily #4 - Truthy Empty Objects</Link>{" "}
          - Feb 21, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-3-swap-values-destructuring">JS Daily #3 - Swap Values using Destructuring</Link>{" "}
          - Feb 20, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-2-arrow-function-this">JS Daily #2 - this in Arrow Function</Link>{" "}
          - Feb 19, 2021
        </li>
        <li>
          <Link to="/javascript/js-daily-1-variable-redeclaration">JS Daily #1 - Variable Redeclaration</Link>{" "}
          - Feb 18, 2021
        </li>
        <li>
          <Link to="/javascript/data-types">Data Types in JavaScript</Link>{" "}
          - Jul 2, 2020
        </li>
        <li>
          <Link to="/javascript/variables">Variables in JavaScript</Link>{" "}
          - Dec 3, 2019
        </li>
        <li>
          <Link to="/javascript/introduction">Introduction to JavaScript</Link>{" "}
          - Nov 24, 2019
        </li>
        <li>
          <Link to="/javascript/quiz-variables">Quiz - Variables in JavaScript</Link>
        </li>
        <li>
          <Link to="/javascript/operators">Operators in JavaScript</Link>
        </li>
        <li>
          <Link to="/javascript/arrays">Arrays in JavaScript</Link>
        </li>
        <li>
          <Link to="/javascript/quiz-arrays">Quiz - Arrays in JavaScript</Link>
        </li>
        <li>
          <Link to="/javascript/es2020-new-features">ES2020 New Features in JavaScript</Link>
        </li>
        <li>
          <Link to="/javascript/es2021-new-features">ES2021 New Features in JavaScript</Link>
        </li>
        <li>
          <Link to="/javascript/questions">JavaScript Questions</Link>
        </li>
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
        <li>
          <Link to="/nextjs/deploy-nextjs-site-in-vercel-with-custom-domain">Deploy Next.js Site in Vercel with Custom Domain</Link>
        </li>
        <li>
          <Link to="/nextjs/hello-world-nextjs-site-for-beginners">Hello World Next.js Site for Beginners</Link>
        </li>
        <li>
          <Link to="/nextjs/interview-questions-getting-started">Next.js Interview Questions - Getting Started</Link>
        </li>
        <li>
          <Link to="/nextjs/interview-questions-routing-dynamic-routes-catch-all">Next.js Interview Questions - Routing, Dynamic Routes, Catch-All Routes</Link>
        </li>
        <li>
          <Link to="/nextjs/interview-questions-links-redirect">Next.js Interview Questions - Link</Link>
        </li>
        <li>
          <Link to="/blog/empty-shallowwrapper-snapshot-jest-enzyme">
            SOLVED: Empty ShallowWrapper Snapshot Object in Jest and Enzyme
          </Link>{" "}
          - Aug 26, 2020
        </li>
        <li>
          <Link to="/blog/react-native-vs-native-apps">
            React Native vs Native Apps
          </Link>{" "}
          - Jun 4, 2020
        </li>
        <li>
          <Link to="/blog/deno-installation">How to Install Deno</Link> - Jun 2,
          2020
        </li>
        <li>
          <Link to="/blog/react-hello-world-app-without-jsx">
            Hello World App Using React Without JSX
          </Link>{" "}
          - May 29, 2020
        </li>
        <li>
          <Link to="/blog/write-your-first-react-app">
            Write Your First React App
          </Link>{" "}
          - May 29, 2020
        </li>
        <li>
          <Link to="/blog/react-bootstrap-controllabel-warning">
            SOLVED: ControlLabel from React Bootstrap throws Warning
          </Link>{" "}
          - Feb 19, 2020
        </li>
        <li>
          <Link to="/blog/create-react-app-setuptests-js-not-working">
            SOLVED: setupTests.js not working in CreateReactApp
          </Link>{" "}
          - Feb 6, 2020
        </li>
      </ul>
    </div>
  )
}

export default Posts
