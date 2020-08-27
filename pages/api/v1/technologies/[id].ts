import data from "../../../../db";
import { NextApiRequest, NextApiResponse } from "next";
import { Response } from "../../../../types/Api";
import { Technology } from "../../../../types/Technology";

export default (
  req: NextApiRequest,
  res: NextApiResponse<Response<Technology>>
) => {
  const {
    query: { id },
  } = req;

  const technology = data.technologies.find((p) => p.id === id);

  if (technology) {
    res.status(200).json({ status: "success", data: technology });
  }

  return res
    .status(404)
    .json({ status: "error", message: `Uninvented technology (id: '${id}')` });
};
