import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const orderInfoStyles = makeStyles(() => ({
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
}));

interface Props {
  orderNumber: string;
  provider: string;
  date: string;
}

export const OrderInfo = React.memo((props: Props) => {
  const { orderNumber, provider, date } = props;
  const classes = orderInfoStyles();

  return (
    <div className={classes.datas}>
      <div>
        <span className={classes.item}>Order Number</span>
        <span>{orderNumber}</span>
      </div>
      <div>
        <span className={classes.item}>Supplier Name</span>
        <span>{provider}</span>
      </div>
      <input type="date" defaultValue={date} />
    </div>
  );
});
