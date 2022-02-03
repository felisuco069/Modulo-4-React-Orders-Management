import { OrderForm } from "../core/myContext.model";

const url = `${process.env.API_BASE_URL}`;

export const getOrdersList = (client: number): Promise<OrderForm> =>
  fetch(`${url}/orders`)
    .then((response) => response.json())
    .then((data) => data[client]);
