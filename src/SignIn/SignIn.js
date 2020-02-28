import React from "react";
import styles from "./SignIn.module.css";

export default class SignIn extends React.Component {
  render() {
    return (
      <div className={styles["sign-in-wrapper"]}>
        <form>
          <fieldset>
            <label htmlFor="username">
              Username:
              <input type="text" id="username" />
            </label>

            <label htmlFor="password">
              Password:
              <input type="password" id="password" />
            </label>

            <div className={styles["btns-div"]}>
              <button className={styles["sign-in-btn"]}>Sign In</button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
