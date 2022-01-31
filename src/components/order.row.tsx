import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

import { Order } from "./order.detail.table";

interface Props {
  product: Order;
}

export const OrderRow = (props: Props) => {
  const { product } = props;
  const [state, setState] = React.useState(product.state);
  const handleClick = () => {
    setState(!state);
    product.state = state;
  };

  return (
    <TableRow key={product.id}>
      <TableCell size="small" scope="row">
        <input type="checkbox" checked={state} onClick={handleClick}></input>
      </TableCell>
      <TableCell align="left">
        {product.state ? "validated" : "Pending "}
      </TableCell>
      <TableCell align="left">{product.description}</TableCell>
      <TableCell align="center">
        <input type="number" placeholder={`${product.Import} €`} />
      </TableCell>
    </TableRow>
  );
};
