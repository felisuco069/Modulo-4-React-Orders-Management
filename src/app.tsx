import React from "react";

import { Header } from "./components/order";

export const App = () => {
  return (
    <div>
      <Header orderNumber={124234} supplierName={"Pepito"} />
    </div>
  );
};
