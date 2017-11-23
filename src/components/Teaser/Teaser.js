import React from "react";

import styles from "./Teaser.css";
import typo from "../Typography/Typography.css";

const Teaser = () => {
  return (
    <div className={styles.teaser}>
      <div className={styles.dateContainer}>
        <div className={styles.teaserDate}>
          <span className={styles.day}>17</span>
          <span className={styles.monthYear}>
            Nov
            <br />
            2017
          </span>
        </div>
      </div>
      <div className={styles.teaserContent}>
        <h2>Teaser heading</h2>
        <div className={styles.author}>Author name</div>
        <div className={styles.teaserText}>
          <p />
        </div>
        <a href="#" className={styles.button}>
          Read more
        </a>
      </div>
      <div className={styles.teaserTags}>
        <ul>
          <li>
            <a href="#">Teaser tag</a>
          </li>
          <li>
            <a href="#">Teaser tag</a>
          </li>
          <li>
            <a href="#">Teaser tag</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Teaser;
