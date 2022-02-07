import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { OrderRow } from "./order.row";
import { Order, OrderForm } from "../core/myContext.model";
import { MyContext } from "../core/myContext.";

const useStyles = makeStyles({
  table: {
    boxSizing: "border-box",
    width: 800,
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
});

export const OrderDetailTable = () => {
  const { data, setData, checkedList } = React.useContext(MyContext);

  const classes = useStyles();

  const handleClickValidate = () => {
    const newStateOrder: Order[] = data.order.map((element) => {
      if (checkedList.includes(element.id)) {
        return { ...element, isValidate: "Validate", state: true };
      } else {
        return { ...element };
      }
    });

    setData({ ...data, order: newStateOrder });
  };

  const handleClickInValidate = () => {
    const newStateOrder: Order[] = data.order.map((element) => {
      if (checkedList.includes(element.id)) {
        return { ...element, isValidate: "Pending", state: false };
      } else {
        return { ...element };
      }
    });

    setData({ ...data, order: newStateOrder });
  };

  return (
    <>
      <div className={classes.validationInputs}>
        <button onClick={handleClickValidate}>Validate</button>
        <button onClick={handleClickInValidate}>Invalidate</button>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">State</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="center">Import</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.order.map((product) => (
              <OrderRow product={product} key={product.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
