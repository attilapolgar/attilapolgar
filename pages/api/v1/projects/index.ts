import data from "../../../../db";
import { NextApiRequest, NextApiResponse } from "next";
import { Project } from "../../../../types/Project";
import { Response } from "../../../../types/Api";

export default (
  req: NextApiRequest,
  res: NextApiResponse<Response<Project[]>>
) => {
  res.status(200).json({ status: "success", data: data.projects });
};
