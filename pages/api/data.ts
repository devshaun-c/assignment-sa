// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { BENCHMARK_OPTIONS } from "../../src/constants/constants";
import { randomDataGenerate } from "../../src/utils/randomGenerator";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string[]>
) {
  const { period, benchmark, currency } = req.body;

  let usedBenchmark = BENCHMARK_OPTIONS.bm4060;
  if (benchmark) usedBenchmark = benchmark;

  // console.log(req.body);
  //NOTE:
  //Get some random data based on period, benchmark and currency.
  //In a real scenario, this would be pulling from actual data source with the following query params.
  const data = randomDataGenerate(period, usedBenchmark, currency);
  res.status(200).json(data);
}
