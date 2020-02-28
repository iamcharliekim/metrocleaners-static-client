import React from "react";

const Context = React.createContext({
  onOpenNav: () => {},
  openNav: "",

  orders: [],
});

export default Context;
