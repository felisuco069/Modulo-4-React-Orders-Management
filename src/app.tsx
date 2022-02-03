import React from "react";

import { MyContextProvider } from "./core/myContext.";
import { Order } from "./order";

export const App = () => {
  return (
    // <MyContextProvider>
    <Order />
    // </MyContextProvider>
  );
};
