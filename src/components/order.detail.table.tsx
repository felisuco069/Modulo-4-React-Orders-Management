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

const useStyles = makeStyles({
  table: {
    boxSizing: "border-box",
    width: 800,
  },
});

interface Props {
  order: Order[];
}

export const OrderDetailTable = (props: Props) => {
  const { order } = props;

  const classes = useStyles();

  return (
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
          {order.map((element) => (
            <OrderRow product={element} key={element.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
