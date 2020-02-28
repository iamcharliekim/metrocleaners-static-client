import React from "react";
import { withRouter } from "react-router-dom";

import Context from "../Context/Context";
import styles from "./Messanger.module.css";

class Messanger extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className={styles["send-sms-wrapper"]}>
        <h3>Send {this.props.state.customer.full_name} a text-message:</h3>
        <div className={styles["textarea-wrapper"]}>
          <textarea />
        </div>
        <div className={styles["button-wrapper"]}>
          <button className={styles["send-msg-btn"]}>Send</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Messanger);
