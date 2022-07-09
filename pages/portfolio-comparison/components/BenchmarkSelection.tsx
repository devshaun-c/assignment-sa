import React from "react";
import { createUseStyles } from "react-jss";
import BasicSelect from "../../../src/components/select/BasicSelect";
import { BENCHMARK_OPTIONS } from "../../../src/constants/constants";

const useStyles = createUseStyles({
  benchmark: {
    margin: "16px 0 32px 0",
    display: "flex",
    borderRadius: "var(--border-radius)",
    overflow: "hidden",
  },
  left: {
    flex: 1,
    padding: "32px",
    backgroundColor: "whitesmoke",
    position: "relative",
  },
  right: {
    flex: 1,
    padding: "32px",
    backgroundColor: "rgb(234 234 234)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  vsIcon: {
    position: "absolute",
    right: "0",
    top: "50%",
    transform: "translate(20px,-20px)",
    backgroundColor: "var(--accent-color)",
    height: "40px",
    width: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& span": {
      fontWeight: "bold",
      color: "white",
      lineHeight: "1 !important",
      textAlign: "center",
      marginBottom: "4px",
    },
  },
});

const benchmarkOptions = [
  {
    value: BENCHMARK_OPTIONS.bm4060,
    label: "40/60 portfolio",
  },
  {
    value: BENCHMARK_OPTIONS.bm2080,
    label: "20/80 portfolio",
  },
];

const BenchmarkSelection = ({ setValue, value }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.benchmark}>
      <div className={classes.left}>
        <div className="fw-600 fs-sm fc-g">General investing</div>
        <div className="fc-a fs-md fw-b">StashAway Risk Index 14%</div>
        <div className={classes.vsIcon}>
          <span>vs</span>
        </div>
      </div>

      <div className={classes.right}>
        <BasicSelect
          placeholder="Which benchmark do you want to compare?"
          value={value}
          setValue={setValue}
          options={benchmarkOptions}
        />
      </div>
    </div>
  );
};

export default BenchmarkSelection;

interface Props {
  setValue: any;
  value: string;
}
