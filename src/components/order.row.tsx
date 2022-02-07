import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";

import { Order } from "../core/myContext.model";
import { MyContext } from "../core/myContext.";

const orderRowStyles = makeStyles({
  importInput: {
    textAlign: "right",
    width: 75,
  },
});
interface Props {
  product: Order;
}

export const OrderRow = (props: Props) => {
  const { product } = props;
  const { data, setData, checkedList, setCheckedList } =
    React.useContext(MyContext);
  const [inputValue, setInputValue] = React.useState(product.import);
  const [isChecked, setIsChecked] = React.useState<boolean>(product.state);

  const classes = orderRowStyles();

  const handleChangeCheck = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      setCheckedList([...checkedList, product.id]);
    } else {
      const newCheckedArray = checkedList.filter((id) => id !== product.id);
      setCheckedList(newCheckedArray);
    }
  };

  const handleChangeImport = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <TableRow>
      <TableCell size="small" scope="row">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChangeCheck}
        ></input>
      </TableCell>
      <TableCell align="left">{product.isValidate}</TableCell>
      <TableCell align="left">{product.description}</TableCell>
      <TableCell align="center">
        <input
          type="text"
          className={classes.importInput}
          value={inputValue}
          onChange={handleChangeImport}
        />
        €
      </TableCell>
    </TableRow>
  );
};
