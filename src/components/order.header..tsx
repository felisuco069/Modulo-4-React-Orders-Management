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
    "&:disabled": {
      backgroundColor: "grey",
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

interface Props {
  data: OrderForm;
  totalImport: number;
}
export const Header = React.memo((props: Props) => {
  const { data, totalImport } = props;
  const isDisabled: boolean = data.order.some(
    (element) => element.isValidate === "Pending"
  );

  const classes = orderHeaderStyles();
  console.log("Vuelvo a pintar la cabecera");
  return (
    <>
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
              <PercentComplete />
              <span>Percent complete</span>
            </div>
          </div>
          <button className={classes.sendButton} disabled={isDisabled}>
            Send
          </button>
        </div>
      </div>
    </>
  );
});
