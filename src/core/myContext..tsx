import React from "react";

import { Context, OrderForm } from "./myContext.model";

export const MyContext = React.createContext<Context>({
  data: {
    orderNumber: 0,
    provider: "",
    date: "",
    order: [],
  },
  setData: (value) => {},
});

export const MyContextProvider: React.FC = ({ children }) => {
  const [data, setData] = React.useState<OrderForm>({
    orderNumber: 0,
    provider: "",
    date: "",
    order: [],
  });

  return (
    <MyContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
