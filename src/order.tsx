import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { getOrdersList } from "./api/api";
import { OrderDetailTable } from "./components/order.detail.table";
import { Header } from "./components/order.header.";
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
  containerDatas: {
    boxSizing: "border-box",
    padding: "1.5rem",
    border: "1px solid black",
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "800px",
    height: "200px",
  },
  datas: {
    display: "inline-flex",
    width: "550px",
    height: "60px",
    justifyContent: "space-between",
    "& input": {
      height: "max-content",
    },

    "& > div": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  item: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  resultsAndButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  containerImpPerce: {
    display: "flex",
    width: "300px",
    height: "60px",
    justifyContent: "space-between",
  },
  import: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  percent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    "& > span": {
      fontWeight: "bold",
    },
  },
  sendButton: {
    height: "max-content",
    padding: "8px 18px",
    backgroundColor: "green",
    "&:hover": {
      backgroundColor: "#99F45E ",
    },
  },

  validationInputs: {
    display: "flex",
    margin: "12px",
    "& > button": {
      width: "80px",
      margin: "012px",
      "&:hover": {
        backgroundColor: "aquamarine",
      },
    },
  },
  orderDetail: {
    boxSizing: "border-box",
    width: "800px",
    display: "flex",
    border: "1px solid black",
    margin: "18px 0",
  },
}));

export const Order = () => {
  const { data, setData, totalImport, setTotalImport } =
    React.useContext(MyContext);
  const [orderPage, setOrderPage] = React.useState<number>(0);

  const classes = orderHeaderStyles();

  React.useEffect(() => {
    getOrdersList(orderPage).then((datas: OrderForm) => {
      setTotalImport(
        datas.order.reduce((acc, c) => (acc += Number(c.import)), 0)
      );
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
        <Header data={data} totalImport={totalImport} />
        <OrderDetailTable />
      </div>
    </>
  );
};
