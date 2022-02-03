import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Order, OrderForm } from "../core/myContext.model";
import { getOrdersList } from "../api/api";
import { OrderDetailTable } from "./order.detail.table";

const orderHeaderStyles = makeStyles(() => ({
  containerDatas: {
    boxSizing: "border-box",
    padding: "1.5rem",
    border: "1px solid black",
    display: "inline-flex",
    flexDirection: "column",
    width: "800px",
  },
  datas: {
    display: "flex",
    "& > div": {
      margin: "0 2rem",
      justifyContent: "space-between",
      display: "flex",
      flexDirection: "column",
    },
  },
  item: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  dateContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: "12px",
    marginRight: "12px",
    width: 200,
  },
  import: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem 2rem 0 2rem",
  },
  results: {
    display: "flex",
    justifyContent: "space-between",
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
  const [data, setData] = React.useState<OrderForm>({
    orderNumber: 0,
    provider: "",
    date: "",
    order: [],
  });
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
      <button onClick={handleClickPrev}>Prev</button>
      <button onClick={handleClickNext}>Next</button>
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
        <div className={classes.results}>
          <div>
            <div className={classes.import}>
              <span className={classes.item}>Total Import</span>
              <span>{totalImport}</span>
            </div>
            <span>Percent complete</span>
          </div>
          <button>Send</button>
        </div>
      </div>
      <div className={classes.validationInputs}>
        <button>Validate</button>
        <button>Invalidate</button>
      </div>
      <OrderDetailTable order={data.order} />
    </>
  );
};
