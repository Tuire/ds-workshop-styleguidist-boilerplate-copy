import React from "react";

import styles from "./TeaserTags.css";
import typo from "../Typography/Typography.css";

const TeaserTags = () => {
  return (
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
  );
};

export default TeaserTags;
