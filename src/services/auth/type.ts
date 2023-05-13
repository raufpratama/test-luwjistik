export interface ILoginResponseData {
  session?:string;
  user?:string;
}

export interface ILoginPayload {
  username: string;
  password: string;
}
