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

const useStyles = makeStyles({
  table: {
    boxSizing: "border-box",
    width: 800,
  },
});

export interface Order {
  id: number;
  state: boolean;
  description: string;
  Import: number;
}

interface OrderForm {
  orderNumber: number;
  Provider: string;
  Date: string;
  order: Order[];
}

const dates: OrderForm = {
  orderNumber: 557,
  Provider: "Babbleblab",
  Date: "20/01/2022",
  order: [
    {
      id: 1,
      state: false,
      description: "Pediculosis due to Pediculus humanus capitis",
      Import: 1147.63,
    },
    {
      id: 2,
      state: true,
      description: "Occupant of streetcar injured in unsp traffic accident",
      Import: 611.03,
    },
    {
      id: 3,
      state: true,
      description: "Occupant of streetcar injured in unsp traffic accident",
      Import: 611.03,
    },
    {
      id: 4,
      state: false,
      description:
        "Drowning and submersion due to canoe or kayak sinking, init",
      Import: 100.52,
    },
    {
      id: 5,
      state: false,
      description: "Obstructed labor due to breech presentation, fetus 3",
      Import: 718.9,
    },
  ],
};

export default function DataTable() {
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
          {dates.order.map((element: Order) => (
            <OrderRow product={element} key={element.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
