import React from "react";

import styles from "./Teaser.css";

const Teaser = () => {
  return (
    <div className={styles.teaser}>
      <div className="date-container">
        <div className="teaser-date">
          <span className="day">17</span>
          <span className="month-year">
            Nov
            <br />
            2017
          </span>
        </div>
      </div>
      <div className="teaser-content">
        <h2>Teaser heading</h2>
        <div className="author">Author name</div>
        <div className="teaser-text">
          <p />
        </div>
        <a href="#" className="button">
          Read more
        </a>
      </div>
      <div className="teaser-tags">
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
