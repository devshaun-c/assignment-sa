// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { randomDataGenerate } from "../../src/utils/randomGenerator";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  const { period, benchmark, currency } = req.body;
  console.log(req.body);
  //NOTE:
  //Get some random data based on period, benchmark and currency.
  //In a real scenario, this would be pulling from actual data source with the following query params.
  const data = randomDataGenerate(period, benchmark, currency);
  res.status(200).json(data);
}
