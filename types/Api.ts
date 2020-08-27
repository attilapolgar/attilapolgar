export type Response<Data = any> = {
  status: "success" | "error";
  message?: string;
  data?: Data;
};
