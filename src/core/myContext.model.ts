export interface Order {
  id: number;
  state: boolean;
  description: string;
  import: number;
}

export interface OrderForm {
  orderNumber: number;
  provider: string;
  date: string;
  order: Order[];
}

export interface Context {
  data: OrderForm;
  setData: (value: OrderForm) => void;
}
