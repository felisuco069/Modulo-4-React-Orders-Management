export interface Order {
  id: string;
  isValidate: string;
  state: boolean;
  description: string;
  import: number;
}

export interface OrderForm {
  orderNumber: string;
  provider: string;
  date: string;
  order: Order[];
}

export interface Context {
  data: OrderForm;
  setData: (value: OrderForm) => void;
  checkedList: string[];
  setCheckedList: (value: string[]) => void;
  totalImport: number;
  setTotalImport: (value: number) => void;
}
