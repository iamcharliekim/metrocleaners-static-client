import React from "react";
import { BrowserRouter, Redirect } from "react-router-dom";
import { Link, Route } from "react-router-dom";
import styles from "./App.module.css";
import Context from "./Context/Context";
import CreateOrder from "./CreateOrder/CreateOrder";
import Customers from "./Customers/Customers";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import OrderDetails from "./OrderDetails/OrderDetails";
import TokenService from "./Services/TokenService";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";

export default class App extends React.Component {
  static contextType = Context;

  state = {
    openNav: false,
    customers: [
      {
        id: 1,
        full_name: "Charles Kim",
        phone_number: "3015255589",
      },
      {
        id: 2,
        full_name: "Steve Lee",
        phone_number: "3012938273",
      },
      {
        id: 3,
        full_name: "Jason Chase",
        phone_number: "3012938273",
      },
    ],

    orders: [
      {
        id: 1,
        order_number: "M2020",
        clerk: "David Kim",
        customer: "Charles Kim",
        phone_number: "3015255589",
        order_date: "2020-02-27T20:00:00.000Z",
        ready_by_date: "2020-02-29T21:00:00.000Z",
        picked_up: false,
        picked_up_date: null,
        paid: false,
        notification_sent: null,
        date_created: "2020-02-27T22:51:16.953Z",
        price: "20",
        quantity: 4,
        date_modified: null,
      },
      {
        id: 2,
        order_number: "M2020",
        clerk: "David Kim",
        customer: "Steve Lee",
        phone_number: "3012938273",
        order_date: "2020-02-29T20:00:00.000Z",
        ready_by_date: "2020-03-01T21:00:00.000Z",
        picked_up: false,
        picked_up_date: null,
        paid: false,
        notification_sent: null,
        price: "40",
        quantity: 7,
        date_created: "2020-02-27T22:51:16.953Z",
        date_modified: null,
      },
      {
        id: 3,
        order_number: "M2020",
        clerk: "David Kim",
        customer: "Jason Chase",
        phone_number: "7032832837",
        order_date: "2020-05-27T20:00:00.000Z",
        ready_by_date: "2020-06-29T21:00:00.000Z",
        picked_up: false,
        picked_up_date: null,
        paid: false,
        notification_sent: null,
        price: "40.54",
        quantity: 7,
        date_created: "2020-02-27T22:51:16.953Z",
        date_modified: null,
      },
    ],
  };

  componentDidMount() {}

  // UTILITY FUNCTIONS ---------------------------------------------------
  onOpenNav = () => {
    this.setState({ openNav: !this.state.openNav });
  };

  signout = () => {
    TokenService.clearAuthToken();
    this.onOpenNav();
  };

  render() {
    const contextVal = {
      onOpenNav: this.onOpenNav,
      openNav: this.state.openNav,

      orders: this.state.orders,
      customers: this.state.customers,
    };

    let navLinks;

    if (!TokenService.hasAuthToken()) {
      navLinks = [
        <Link
          to="/sign-in"
          key="1"
          className={styles["nav-link"]}
          onClick={this.onOpenNav}
        >
          Sign-In
        </Link>,
        <Link
          to="/sign-up"
          key="2"
          className={styles["nav-link"]}
          onClick={this.onOpenNav}
        >
          Sign-Up
        </Link>,
      ];
    } else {
      navLinks = [
        <Link
          to="/home"
          key="0"
          className={styles["nav-link"]}
          onClick={this.onOpenNav}
        >
          Home
        </Link>,
        <Link
          to="/new-order"
          key="3"
          className={styles["nav-link"]}
          onClick={this.onOpenNav}
        >
          + New Order
        </Link>,
        <Link
          to="/customers"
          key="4"
          className={styles["nav-link"]}
          onClick={this.onOpenNav}
        >
          Customers
        </Link>,
        <Link
          to="/sign-in"
          key="5"
          className={styles["nav-link"]}
          onClick={this.signout}
        >
          Sign-Out
        </Link>,
      ];
    }

    return (
      <BrowserRouter>
        <Context.Provider value={contextVal}>
          <div className={styles.App}>
            <Navbar />
            {this.state.openNav ? (
              <div className={styles["nav-links-wrapper"]}>
                {navLinks.map(link => {
                  return link;
                })}
              </div>
            ) : null}

            {TokenService.hasAuthToken() ? (
              <Redirect to="/home" />
            ) : (
              <Redirect to="/sign-in" />
            )}

            <Route path="/sign-up" exact component={SignUp} />
            <Route path="/sign-in" exact component={SignIn} />
            {/* <Route path='/home' exact component={Home} /> */}

            <Route
              path="/home"
              exact
              render={props => (
                <Home boxIsChecked={this.state.boxIsChecked} {...props} />
              )}
            />
            <Route path="/new-order" exact component={CreateOrder} />
            <Route path="/customers" exact component={Customers} />
            <Route path="/orders/:order_id" exact component={OrderDetails} />
          </div>
          <Footer />
        </Context.Provider>
      </BrowserRouter>
    );
  }
}
