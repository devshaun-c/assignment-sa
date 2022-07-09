import { CURRENCY_OPTIONS } from "../constants/constants";
import { getDates } from "./utils";

//NOTE: This is purely for demo purposes
export const randomDataGenerate = (
  period: string,
  benchmark: string,
  currency: string
) => {
  const startingValue = currency === CURRENCY_OPTIONS.sgd ? 100000 : 300000;
  let randomValuesData1: number[] = [];
  const dates = getDates(period);

  let currentValue = startingValue;
  for (let i = 0; i < dates.length; i++) {
    const randomNumber = Math.floor(Math.random() * 100000);
    if (i % 2) {
      currentValue = currentValue + randomNumber + 20000;
    } else {
      currentValue = currentValue - randomNumber - 10000;
    }
    if (currentValue < 0) currentValue = 0;
    randomValuesData1.push(currentValue);
  }

  const randomValuesData2: number[] = randomValuesData1.map((val) => {
    const randomNumber = Math.floor(Math.random() * 100000);
    const value = val - randomNumber;
    return value < 0 ? val : value;
  });

  let data: any[] = [];

  dates.forEach((date, idx) => {
    let dataObj = {
      date: date.format("MMM DD"),
      sa: Math.floor(randomValuesData1[idx]),
      bm: Math.floor(randomValuesData2[idx]),
      fullDate: date.format("DD MMM YYYY"),
    };
    data.push(dataObj);
  });

  return data;
};
