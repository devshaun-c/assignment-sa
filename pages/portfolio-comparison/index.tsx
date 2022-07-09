import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import Page from "../../src/components/Page";
import PageHeader from "../../src/components/PageHeader";
import { TabInterface } from "../../src/components/TabBar";
import { createUseStyles } from "react-jss";
import BenchmarkSelection from "./components/BenchmarkSelection";
import ButtonTabs from "../../src/components/ButtonTabs";
import Chart from "./components/Chart";
import {
  BENCHMARK_OPTIONS,
  CURRENCY_OPTIONS,
  PERIOD_OPTIONS,
} from "../../src/constants/constants";

const useStyles = createUseStyles({
  filter: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const tabs: TabInterface[] = [
  { label: "Overview", value: "overview" },
  { label: "Assets", value: "assets" },
  { label: "Projection", value: "projection" },
  { label: "Benchmark", value: "benchmark" },
];

const periodFilterOptions = [
  { label: "1 month", value: PERIOD_OPTIONS.m1 },
  { label: "6 month", value: PERIOD_OPTIONS.m6 },
  { label: "Year-to-date", value: PERIOD_OPTIONS.ytd },
  { label: "1 year", value: PERIOD_OPTIONS.y1 },
  { label: "5 years", value: PERIOD_OPTIONS.y5 },
  { label: "Max", value: PERIOD_OPTIONS.max },
];

const currencyFilterOptions = [
  { label: "SGD", value: CURRENCY_OPTIONS.sgd },
  { label: "MYR", value: CURRENCY_OPTIONS.myr },
];

const PortfolioComparison = () => {
  const classes = useStyles();
  const [tab, setTab] = useState(tabs[0].value);
  const [period, setPeriod] = useState(periodFilterOptions[0].value);
  const [benchmark, setBenchmark] = useState(BENCHMARK_OPTIONS.bm4060);
  const [currency, setCurrency] = useState(currencyFilterOptions[0].value);

  return (
    <Page>
      <PageHeader
        title="General investing"
        tabs={tabs}
        tab={tab}
        setTab={setTab}
      />
      <Container>
        <div className="fs-lg fw-800 mt-4">Portfolio benchmark</div>
        <BenchmarkSelection setValue={setBenchmark} value={benchmark} />

        <div className={classes.filter}>
          <ButtonTabs
            options={periodFilterOptions}
            setValue={setPeriod}
            value={period}
          />
          <ButtonTabs
            options={currencyFilterOptions}
            setValue={setCurrency}
            value={currency}
          />
        </div>
        <Chart currency={currency} period={period} benchmark={benchmark} />
      </Container>
    </Page>
  );
};

export default PortfolioComparison;
