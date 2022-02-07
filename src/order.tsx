import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { getOrdersList } from "./api/api";
import { OrderDetailTable } from "./components/order.detail.table";
import { Header } from "./components/order.header";
import { MyContext } from "./core/myContext.";
import { OrderForm } from "./core/myContext.model";

const orderHeaderStyles = makeStyles(() => ({
  orderContainer: {
    display: "flex",
    flexDirection: "column",
  },
  buttonPage: {
    display: "flex",
    width: "200px",
    marginBottom: "12px",
    justifyContent: "space-between",
    "& button": {
      width: "80px",
    },
  },
}));

export const Order = () => {
  const { data, setData, totalImport, setTotalImport } =
    React.useContext(MyContext);
  const [orderPage, setOrderPage] = React.useState<number>(0);

  const classes = orderHeaderStyles();

  React.useEffect(() => {
    getOrdersList(orderPage).then((datas: OrderForm) => {
      if (datas) {
        setData(datas);
      }
    });
  }, [orderPage]);

  const handleClickPrev = () => {
    if (orderPage > 0) setOrderPage(orderPage - 1);
  };
  const handleClickNext = () => {
    setOrderPage(orderPage + 1);
  };
  return (
    <>
      <h1>Request to supplier</h1>
      <div className={classes.orderContainer}>
        <div className={classes.buttonPage}>
          <button onClick={handleClickPrev}>Prev</button>
          <button onClick={handleClickNext}>Next</button>
        </div>
        <Header />
        <OrderDetailTable />
      </div>
    </>
  );
};
