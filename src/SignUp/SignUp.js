import React from "react";
import styles from "./SignUp.module.css";

export default class SignUp extends React.Component {
  render() {
    return (
      <div className={styles["sign-up-wrapper"]}>
        {this.state.error ? (
          <h1 className={styles["error"]}> {this.state.error}</h1>
        ) : null}
        <form>
          <fieldset>
            <label htmlFor="firstname">
              First Name:
              <input type="text" id="firstname" />
            </label>

            <label htmlFor="lastname">
              Last Name:
              <input type="text" id="lastname" />
            </label>

            <label htmlFor="username">
              Username:
              <input type="text" id="username" />
            </label>

            <label htmlFor="password">
              Password:
              <input type="password" id="password" />
            </label>

            <div className={styles["btns-div"]}>
              <button className={styles["sign-up-btn"]}>Sign Up</button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
