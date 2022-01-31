import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";

import DataTable from "./order.detail.table";
const useStyles = makeStyles(() => ({
  containerDates: {
    boxSizing: "border-box",
    padding: "1.5rem",
    border: "1px solid black",
    display: "inline-flex",
    flexDirection: "column",
    width: "800px",
  },
  dates: {
    display: "flex",
    "& > div": {
      margin: "0 2rem",
      justifyContent: "space-between",
      display: "flex",
      flexDirection: "column",
    },
  },
  item: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  import: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem 2rem 0 2rem",
  },
  results: {
    display: "flex",
    justifyContent: "space-between",
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
  orderDetail: {
    boxSizing: "border-box",
    width: "800px",
    display: "flex",
    border: "1px solid black",
    margin: "18px 0",
  },
}));

interface Props {
  orderNumber: number;
  supplierName: string;
}

export const Header = (props: Props) => {
  const { orderNumber, supplierName } = props;
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );
  const [totalImport, setTotalImport] = React.useState(1);

  const classes = useStyles();

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <>
      <h1>Request to supplier</h1>
      <div className={classes.containerDates}>
        <div className={classes.dates}>
          <div>
            <span className={classes.item}>Order Number</span>
            <span>{orderNumber}</span>
          </div>
          <div>
            <span className={classes.item}>Supplier Name</span>
            <span>{supplierName}</span>
          </div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Order date"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </div>
        <div className={classes.results}>
          <div>
            <div className={classes.import}>
              <span className={classes.item}>Total Import</span>
              <span>{totalImport}</span>
            </div>
            <span>Percent complete</span>
          </div>
          <button>Send</button>
        </div>
      </div>
      <div className={classes.validationInputs}>
        <button>Validate</button>
        <button>Invalidate</button>
      </div>
      <div className={classes.orderDetail}>
        <DataTable />
      </div>
    </>
  );
};
