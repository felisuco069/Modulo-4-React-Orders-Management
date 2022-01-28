import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    "& > div": {
      margin: "0 12px",
      justifyContent: "space-between",
      display: "flex",
      flexDirection: "column",
    },
  },
  item: {
    fontSize: "1.2rem",
    fontWeight: "bold",
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

  const classes = useStyles();

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className={classes.header}>
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
  );
};
