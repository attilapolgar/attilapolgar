import data from "../../../../db";
import { NextApiRequest, NextApiResponse } from "next";
import { Response } from "../../../../types/Api";
import { Workplace } from "../../../../types/Workplace";

export default (
  req: NextApiRequest,
  res: NextApiResponse<Response<Workplace[]>>
) => {
  res.status(200).json({ status: "success", data: data.workplaces });
};
