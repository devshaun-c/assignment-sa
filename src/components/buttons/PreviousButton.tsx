import { Button } from "@mui/material";
import React from "react";
import { createUseStyles } from "react-jss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const useStyles = createUseStyles({
  buttonStyle: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "var(--secondary-color)",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "16px",
  },
  icon: {
    fontSize: "18px",
  },
});

const PreviousButton = ({ title }: Props) => {
  const classes = useStyles();

  return (
    <button className={classes.buttonStyle}>
      <ArrowBackIcon className={classes.icon} />

      {title}
    </button>
  );
};

export default PreviousButton;

interface Props {
  title: string;
  onClick: () => void;
}
