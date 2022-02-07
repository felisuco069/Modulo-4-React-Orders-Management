import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import { MyContext } from "../core/myContext.";

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

export const PercentComplete = () => {
  const { data } = React.useContext(MyContext);
  const [percent, setPercent] = React.useState<number>(0);

  const classes = percentStyles();
  React.useEffect(() => {
    const totalElement = data.order.length;
    const elementChecked = data.order.filter(
      (element) => element.state === true
    );
    const percentComplete = Math.round(
      (elementChecked.length / totalElement) * 100
    );
    setPercent(percentComplete);
  }, [data]);

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
