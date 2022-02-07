import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PercentComplete } from "./percent.complete";
import { MyContext } from "../core/myContext.";

const orderHeaderCalculateStyles = makeStyles(() => ({
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
}));

export const OrderHeaderCalculate = () => {
  const { data, totalImport, setTotalImport } = React.useContext(MyContext);
  React.useEffect(() => {
    setTotalImport(
      Math.round(
        data.order?.reduce((acc, c) => (acc += Number(c.import)), 0) * 100
      ) / 100
    );
  }, [data]);
  const isDisabled: boolean = data.order.some((element) => !element.state);

  const classes = orderHeaderCalculateStyles();
  return (
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
  );
};
