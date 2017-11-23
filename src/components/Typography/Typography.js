import React from "react";

import styles from "./Typography.css";

/**
 * The only true button.
 */
const Typography = () => {
  console.log(styles);
  return (
    <div className="typography">
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
    </div>
  );
};

export default Typography;
