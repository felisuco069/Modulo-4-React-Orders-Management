import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Order, OrderForm } from "../core/myContext.model";
import { getOrdersList } from "../api/api";
import { OrderDetailTable } from "./order.detail.table";
import { PercentComplete } from "./percent.complete";
import { MyContext } from "../core/myContext.";

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
export const Header = () => {
  const { data, setData } = React.useContext(MyContext);
  // const [data, setData] = React.useState<OrderForm>({
  //   orderNumber: 0,
  //   provider: "",
  //   date: "",
  //   order: [],
  // });
  const [orderPage, setOrderPage] = React.useState<number>(0);
  const [totalImport, setTotalImport] = React.useState<number>(0);

  React.useEffect(() => {
    getOrdersList(orderPage).then((datas: OrderForm) => {
      setTotalImport(
        datas.order.reduce((acc, c) => (acc = acc + Number(c.import)), 0)
      );
      if (datas) {
        setData(datas);
      }
    });
  }, [orderPage]);

  const classes = orderHeaderStyles();

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
        <div className={classes.containerDatas}>
          <div className={classes.datas}>
            <div>
              <span className={classes.item}>Order Number</span>
              <span>{data.orderNumber}</span>
            </div>
            <div>
              <span className={classes.item}>Supplier Name</span>
              <span>{data.provider}</span>
            </div>
            <input type="date" defaultValue={data.date} />
          </div>
          <div className={classes.resultsAndButton}>
            <div className={classes.containerImpPerce}>
              <div className={classes.import}>
                <span className={classes.item}>Total Import</span>
                <span>{totalImport}</span>
              </div>
              <div className={classes.percent}>
                <PercentComplete order={data.order} />
                <span>Percent complete</span>
              </div>
            </div>
            <button className={classes.sendButton}>Send</button>
          </div>
        </div>
        <div className={classes.validationInputs}>
          <button>Validate</button>
          <button>Invalidate</button>
        </div>
        <OrderDetailTable order={data.order} />
      </div>
    </>
  );
};
