import client from "../../api";
import URL_PATH from "../../contants/url";
import { ICreateOrderPayload } from "./type";

const provider = {
  getListOrders: () => client.get(URL_PATH.get_list_orders),
  createOrder: (bodyPayload: ICreateOrderPayload) => client.post(URL_PATH.create_order, bodyPayload)
}

export default provider