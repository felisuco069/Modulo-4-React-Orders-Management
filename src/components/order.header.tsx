import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { MyContext } from "../core/myContext.";
import { OrderInfo } from "./order.header.info";
import { OrderHeaderCalculate } from "./order.header.calculate";

const orderHeaderStyles = makeStyles(() => ({
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
}));

export const Header = () => {
  const { data } = React.useContext(MyContext);

  const classes = orderHeaderStyles();

  return (
    <>
      <div className={classes.containerDatas}>
        <OrderInfo
          orderNumber={data.orderNumber}
          provider={data.provider}
          date={data.date}
        />
        <OrderHeaderCalculate />
      </div>
    </>
  );
};
