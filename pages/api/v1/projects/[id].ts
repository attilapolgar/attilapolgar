import data from "../../../../db";
import { NextApiRequest, NextApiResponse } from "next";
import { Project } from "../../../../types/Project";
import { Response } from "../../../../types/Api";

export default (
  req: NextApiRequest,
  res: NextApiResponse<Response<Project>>
) => {
  const {
    query: { id },
  } = req;

  const project = data.projects.find((p) => p.id === id);

  if (project) {
    res.status(200).json({ status: "success", data: project });
  }

  return res
    .status(404)
    .json({ status: "error", message: `Project not found (id: '${id}')` });
};
