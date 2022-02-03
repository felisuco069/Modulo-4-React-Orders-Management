import React from "react";

import { Context, OrderForm } from "./myContext.model";

export const MyContext = React.createContext<Context>({
  dates: [],
  setDates: (value) => {},
});

export const MyContextProvider: React.FC = ({ children }) => {
  const [dates, setDates] = React.useState<OrderForm[]>([]);

  return (
    <MyContext.Provider
      value={{
        dates,
        setDates,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
