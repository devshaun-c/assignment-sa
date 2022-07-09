import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import ChartTooltip from "./ChartTooltip";
import { getBenchmarkTitle } from "../../../src/utils/utils";

const useStyles = createUseStyles({
  lineChart: {
    backgroundColor: "var(--primary-color)",
    padding: "32px 24px",
    borderRadius: "var(--border-radius)",
    marginTop: "16px",
  },
  chartHeader: { color: "#fff" },
  chart: {
    margin: "48px 0 32px 0",
    height: "300px",
    width: "100%",
  },
  chartLegend: {
    display: "flex",
    justifyContent: "space-around",
    margin: "32px auto",
    maxWidth: "600px",
    fontSize: "12px",
    gap: "24px",
  },
  chartLegendContent: {
    color: "white",
    display: "flex",
  },
  lineOne: {
    marginTop: "8px",
    marginRight: "8px",
    height: "3px",
    width: "20px",
    backgroundColor: "var(--accent-color)",
  },
  lineTwo: {
    marginTop: "8px",
    marginRight: "8px",
    height: "3px",
    width: "20px",
    backgroundColor: "var(--tertiary-color)",
  },
});

const Chart = ({ currency, period, benchmark }: Props) => {
  const [data, setData] = useState([]);

  // Fetch chart data from API
  useEffect(() => {
    fetch("/api/data", {
      body: JSON.stringify({ currency, period, benchmark }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [currency, period, benchmark]);

  const classes = useStyles();
  return (
    <div className={classes.lineChart}>
      <div className={classes.chartHeader}>
        <div className="fw-600 fs-lg">
          Portfolio value based on gross returns
        </div>
        <div className="fs-sm mt-1">
          Gross returns and exchange rates sourced from Bloomberg as of 9th July
          2022
        </div>
      </div>
      <div className={classes.chart}>
        <ResponsiveContainer height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, bottom: 5, left: 40 }}
          >
            <CartesianGrid vertical={false} />
            <Line type="linear" dataKey="sa" stroke="#3884d9" dot={false} />
            <Line type="linear" dataKey="bm" stroke="#e7dd74" dot={false} />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12 }}
              tickMargin={10}
              stroke="#fff"
            />
            <YAxis
              tick={{ fontSize: 12 }}
              stroke="#fff"
              axisLine={{ stroke: "none" }}
              tickMargin={30}
            />
            <Tooltip
              content={
                <ChartTooltip currency={currency} benchmark={benchmark} />
              }
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className={classes.chartLegend}>
        <div className={classes.chartLegendContent}>
          <div className={classes.lineOne}></div>
          <span>StashAway Risk Index 14%</span>
        </div>
        <div className={classes.chartLegendContent}>
          <div className={classes.lineTwo}></div>
          <div>
            <div>{getBenchmarkTitle(benchmark)}</div>
            <div style={{ color: "gray" }}>
              VTSMX - Vanguard Total Stock Market index
            </div>
            <div style={{ color: "gray" }}>
              VTBMX - Vanguard Total Btock Market index
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;

interface Props {
  currency: string;
  period: string;
  benchmark: string;
}
