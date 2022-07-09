import moment from "moment";
import { BENCHMARK_OPTIONS } from "../constants/constants";

export function numberWithCommas(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getBenchmarkTitle(benchmark: string) {
  switch (benchmark) {
    case BENCHMARK_OPTIONS.bm2080:
      return "20% VTSMX (Stock) + 80% VBMFX (Bond)";

    default:
      return "40% VTSMX (Stock) + 60% VBMFX (Bond)";
  }
}

export function getDates(filter: string) {
  const numberOfDays = getNumberOfDaysInPeriod(filter);

  let dates = [];
  let totalNumberOfDataPoints = numberOfDays;

  for (let i = 0; i < totalNumberOfDataPoints; i++) {
    var nextDate = moment().subtract(i, "days");
    dates.push(nextDate);
  }

  return dates.reverse();
}

export const getNumberOfDaysInPeriod = (filter: string) => {
  let numberOfMonthsToSubtract = 0;
  switch (filter) {
    case "1mth":
      numberOfMonthsToSubtract = 1;
      break;

    case "6mth":
      numberOfMonthsToSubtract = 6;
      break;

    case "ytd":
      numberOfMonthsToSubtract = 6;
      break;

    case "1yr":
      numberOfMonthsToSubtract = 12;
      break;

    case "5yr":
      numberOfMonthsToSubtract = 60;
      break;

    case "max":
      numberOfMonthsToSubtract = 120;
      break;

    default:
      break;
  }

  const startDate = moment().subtract(numberOfMonthsToSubtract, "month");
  const numberOfDays = moment().diff(startDate, "days");
  return numberOfDays;
};
