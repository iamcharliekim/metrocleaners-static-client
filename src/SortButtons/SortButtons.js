import React from "react";
import Context from "../Context/Context";
import styles from "./SortButtons.module.css";

export default class SortButtons extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className={styles["sort-buttons-wrapper"]}>
        <div className={styles["sort-buttons-inner-wrapper"]}>
          <button className={styles["sort-button"]}>Past</button>
          <button className={styles["sort-button"]}>Upcoming</button>
          <button className={styles["sort-button"]}>All</button>
        </div>
      </div>
    );
  }
}
