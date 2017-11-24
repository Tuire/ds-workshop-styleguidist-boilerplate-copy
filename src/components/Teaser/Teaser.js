import React from "react";

import styles from "./Teaser.css";
import Button from "../Button/Button.js";
import TeaserTags from "../TeaserTags/TeaserTags.js";
import typo from "../Typography/Typography.css";

function createMarkup(data) {
  return { __html: data };
}

function getDay() {
  return parseInt(Math.random() * 30);
}

const Teaser = ({ title, author, content, tags }) => {
  console.log(content);
  return (
    <div className={styles.teaser}>
      <div className={styles.dateContainer}>
        <div className={styles.teaserDate}>
          <span className={styles.day}>{getDay()}</span>
          <span className={styles.monthYear}>
            Nov
            <br />
            2017
          </span>
        </div>
      </div>
      <div className={styles.teaserContent}>
        <h2>{title}</h2>
        <div className="author">{author}</div>
        <div className={styles.teaserText} />
        <Button>Read more</Button>
        <TeaserTags tags={tags} />
      </div>
    </div>
  );
};

export default Teaser;
