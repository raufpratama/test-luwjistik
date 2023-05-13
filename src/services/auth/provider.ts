import client from "../../api";
import URL_PATH from "../../contants/url";
import { ILoginPayload } from "./type";

const provider = {
  login: (bodyPayload:ILoginPayload) => client.post(URL_PATH.login, bodyPayload),
}

export default provider