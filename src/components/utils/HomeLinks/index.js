import React from "react"
import styles from "./style.module.scss";
import { Link } from "gatsby";

function HomeLinks(props) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.content}>
          <div className={styles.title}>Introduction</div>
          <ul className={styles.level1}>
            <li>
              <Link to="#">Introduction to JavaScript</Link>
            </li>
            <li>
              <Link to="#">Executing JavaScript Code</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.content}>
          <div className={styles.title}>Arrays</div>
          <ul className={styles.level1}>
            <li>
              <Link to="#">Array Literal</Link>
            </li>
            <li>
              <Link to="#">Array Declaration</Link>
            </li>
            <li>
              <Link to="#">Read Array Elements</Link>
            </li>
            <li>
              <Link to="#">Set Array Elements</Link>
            </li>
            <li>
              <Link to="#">Memory Allocation</Link>
            </li>
            <li>
              <Link to="#">Array() Function</Link>
            </li>
          </ul>
          <div className={styles.subTitle}>Array Instance Methods</div>
          <ul>
            <li>
              <Link to="#">every()</Link>
            </li>
            <li>
              <Link to="#">find()</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.content}>
          <div className={styles.title}>Arrays</div>
          <ul>
            <li>
              <Link to="#">Array Declaration</Link>
            </li>
            <li>
              <Link to="#">Memory Allocation</Link>
            </li>
          </ul>
          <div className={styles.subTitle}>Array Instance Methods</div>
          <ul>
            <li>
              <Link to="#">every()</Link>
            </li>
            <li>
              <Link to="#">find()</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.content}>
          <div className={styles.title}>Arrays</div>
          <ul>
            <li>
              <Link to="#">Array Declaration</Link>
            </li>
            <li>
              <Link to="#">Memory Allocation</Link>
            </li>
          </ul>
          <div className={styles.subTitle}>Array Instance Methods</div>
          <ul>
            <li>
              <Link to="#">every()</Link>
            </li>
            <li>
              <Link to="#">find()</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.content}>
          <div className={styles.title}>Arrays</div>
          <ul>
            <li>
              <Link to="#">Array Declaration</Link>
            </li>
            <li>
              <Link to="#">Memory Allocation</Link>
            </li>
          </ul>
          <div className={styles.subTitle}>Array Instance Methods</div>
          <ul>
            <li>
              <Link to="#">every()</Link>
            </li>
            <li>
              <Link to="#">find()</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.content}>
          <div className={styles.title}>Arrays</div>
          <ul>
            <li>
              <Link to="#">Array Declaration</Link>
            </li>
            <li>
              <Link to="#">Memory Allocation</Link>
            </li>
          </ul>
          <div className={styles.subTitle}>Array Instance Methods</div>
          <ul>
            <li>
              <Link to="#">every()</Link>
            </li>
            <li>
              <Link to="#">find()</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeLinks;
