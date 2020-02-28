import React from "react";
import Context from "../Context/Context";
import styles from "./CreateOrder.module.css";

export default class CreateOrder extends React.Component {
  static contextType = Context;

  render() {
    return (
      <React.Fragment>
        {!this.context.openNav ? (
          <div className={styles["create-game-wrapper"]}>
            <form>
              <h1>+ New Order</h1>
              <div className={styles["form-row"]}>
                <label htmlFor="order_num">Order #:</label>
                <input type="text" id="order_num" required />
              </div>

              <div className={styles["form-row"]}>
                <label htmlFor="clerk">Clerk:</label>
                <input type="text" id="order_num" required />
              </div>

              <div className={styles["form-row"]}>
                <label htmlFor="customer_name">Customer Name:</label>
                <input type="text" id="order_num" required />
              </div>

              <div className={styles["form-row"]}>
                <label htmlFor="phone_number"> Phone #:</label>
                <input type="text" id="order_num" required />
              </div>

              <div className={styles["form-row"]}>
                <label htmlFor="order-date">Order Date/Time:</label>
                <div className={styles["date-time-inputs-wrapper"]}>
                  <input
                    type="date"
                    id="order-date"
                    required
                    className={styles["date-input"]}
                  />
                  <input
                    type="time"
                    id="order-time"
                    required
                    className={styles["time-input"]}
                  />
                </div>
              </div>

              <div className={styles["form-row"]}>
                <label htmlFor="ready-date">Ready By Date/Time:</label>
                <div className={styles["date-time-inputs-wrapper"]}>
                  <input
                    type="date"
                    id="ready-date"
                    required
                    className={styles["date-input"]}
                  />
                  <input
                    type="time"
                    id="ready-time"
                    required
                    className={styles["time-input"]}
                  />
                </div>
              </div>

              <div className={styles["form-row"]}>
                <label htmlFor="quantity">Quantity (pieces of clothing)</label>
                <input
                  type="number"
                  id="quantity"
                  required
                  className={styles["date-input"]}
                />
              </div>

              <div className={styles["form-row"]}>
                <label htmlFor="price">Price ($)</label>
                <input
                  type="text"
                  id="price"
                  required
                  className={styles["date-input"]}
                />
              </div>

              <div className={styles["btns-panel"]}>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}
