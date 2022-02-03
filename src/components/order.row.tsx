import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Order } from "../core/myContext.model";

interface Props {
  product: Order;
}

export const OrderRow = (props: Props) => {
  const { product } = props;
  const [orderLine, setOrderLine] = React.useState(product);
  const handleClick = () => {
    setOrderLine({ ...orderLine, state: !orderLine.state });
  };

  return (
    <TableRow key={orderLine.id}>
      <TableCell size="small" scope="row">
        <input
          type="checkbox"
          checked={orderLine.state}
          onChange={handleClick}
        ></input>
      </TableCell>
      <TableCell align="left">
        {product.state ? "validated" : "Pending "}
      </TableCell>
      <TableCell align="left">{product.description}</TableCell>
      <TableCell align="center">
        <input type="number" placeholder={`${product.import} €`} />
      </TableCell>
    </TableRow>
  );
};
