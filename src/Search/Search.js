import React from "react";
import Context from "../Context/Context";
import SortButtons from "../SortButtons/SortButtons";
import styles from "./Search.module.css";

export default class Search extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className={styles["search-games-wrapper"]}>
        <div className={styles["search-input-wrapper"]}>
          <input type="text" placeholder="Search orders by...." />
        </div>

        <SortButtons />
      </div>
    );
  }
}
