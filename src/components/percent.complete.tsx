import { Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Order } from "../core/myContext.model";

interface Props {
  order: Order[];
}

const percentStyles = makeStyles(() => ({
  container: {
    display: "flex",
    width: 150,
    justifyContent: "space-between",
  },
  percentContainer: {
    width: "100px",
    height: "20px",
    border: "1px solid black",
  },
  filledIn: {
    height: "20px",
    backgroundColor: "black",
  },
}));

interface Props {
  order: Order[];
}

export const PercentComplete = (props: Props) => {
  const { order } = props;
  const [percent, setPercent] = React.useState<number>(0);

  const classes = percentStyles();
  console.log(order);
  React.useEffect(() => {
    const totalElement = order.length;
    const elementChecked = order.filter((element) => element.state === true);
    console.log(elementChecked);
    const percentComplete = Math.round(
      (elementChecked.length / totalElement) * 100
    );
    console.log(percentComplete);
    setPercent(percentComplete);
  }, [order]);

  return (
    <div className={classes.container}>
      <div className={classes.percentContainer}>
        <div
          style={{ width: `${percent}px` }}
          className={classes.filledIn}
        ></div>
      </div>
      <span>{percent} %</span>
    </div>
  );
};
