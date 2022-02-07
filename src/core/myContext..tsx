import React from "react";

import { Context, OrderForm } from "./myContext.model";

export const MyContext = React.createContext<Context>({
  data: {
    orderNumber: "",
    provider: "",
    date: "",
    order: [],
  },
  setData: (value) => {},
  checkedList: [],
  setCheckedList: (value) => {},
  totalImport: 0,
  setTotalImport: (value) => {},
});

export const MyContextProvider: React.FC = ({ children }) => {
  const [checkedList, setCheckedList] = React.useState<string[]>([]);
  const [data, setData] = React.useState<OrderForm>({
    orderNumber: "",
    provider: "",
    date: "",
    order: [],
  });
  const [totalImport, setTotalImport] = React.useState<number>(0);

  return (
    <MyContext.Provider
      value={{
        data,
        setData,
        checkedList,
        setCheckedList,
        totalImport,
        setTotalImport,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
