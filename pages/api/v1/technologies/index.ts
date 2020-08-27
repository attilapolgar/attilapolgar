import data from "../../../../db";
import { NextApiRequest, NextApiResponse } from "next";
import { Response } from "../../../../types/Api";
import { Technology } from "../../../../types/Technology";

export default (
  _req: NextApiRequest,
  res: NextApiResponse<Response<Technology[]>>
) => {
  res.status(200).json({ status: "success", data: data.technologies });
};
