import React, { useState } from "react";

import { createUseStyles } from "react-jss";
import { Box } from "@mui/material";
import { numberWithCommas } from "../../../src/utils/formatting";
import { getBenchmarkTitle } from "../../../src/utils/utils";

const useStyles = createUseStyles({
  customTooltip: {
    backgroundColor: "#fff",
    color: "#000",
    padding: "16px",
    textAlign: "right",
    borderRadius: "var(--border-radius)",
  },
  tooltipHeader: {
    fontSize: "14px",
    fontWeight: "600",
    marginBottom: "16px",
  },
  tooltipContent: {},
  tooltipLabelIcon: {},
  tooltipContentTitle: {
    fontSize: "12px",
    color: "gray",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "8px",
  },
  tooltipContentValue: {
    fontSize: "16px",
    fontWeight: "600",
    color: "var(--accent-color)",
    marginBottom: "8px",
  },
});

const ChartTooltip = ({ active, payload, label, currency, benchmark }: any) => {
  const classes = useStyles();

  if (active && payload && payload.length) {
    return (
      <div className={classes.customTooltip}>
        <div className={classes.tooltipHeader}>
          {payload[0].payload.fullDate}
        </div>

        <div className={classes.tooltipContent}>
          <div className={classes.tooltipContentTitle}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                backgroundColor: "var(--secondary-color)",
              }}
            ></Box>
            StashAway Risk Index 14%
          </div>
          <div className={classes.tooltipContentValue}>{`$ ${numberWithCommas(
            payload[0].payload.sa
          )}  ${currency.toUpperCase()}`}</div>
          <div className={classes.tooltipContentTitle}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                backgroundColor: "var(--tertiary-color)",
              }}
            ></Box>
            {getBenchmarkTitle(benchmark)}
          </div>
          <div className={classes.tooltipContentValue}>{`$ ${numberWithCommas(
            payload[0].payload.bm
          )}  ${currency.toUpperCase()}`}</div>
        </div>
      </div>
    );
  }

  return null;
};

export default ChartTooltip;
