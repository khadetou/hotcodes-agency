import type { NextApiRequest, NextApiResponse } from "next";
import { search } from "../../../lib/cloudinary";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const params = JSON.parse(req.body);
  const data = await search(params);
  res.status(200).json({ ...data });
}
