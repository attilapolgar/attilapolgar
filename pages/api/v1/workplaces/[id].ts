import data from "../../../../db";
import { NextApiRequest, NextApiResponse } from "next";
import { Response } from "../../../../types/Api";
import { Workplace } from "../../../../types/Workplace";

export default (
  req: NextApiRequest,
  res: NextApiResponse<Response<Workplace>>
) => {
  const {
    query: { id },
  } = req;

  const workplace = data.workplaces.find((p) => p.id === id);

  if (workplace) {
    res.status(200).json({ status: "success", data: workplace });
  }

  return res
    .status(404)
    .json({ status: "error", message: `Workplace not found (id: '${id}')` });
};
