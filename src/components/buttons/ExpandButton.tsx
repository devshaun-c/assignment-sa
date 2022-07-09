import React from "react";
import { createUseStyles } from "react-jss";
import { ExpandMore } from "@mui/icons-material";

const useStyles = createUseStyles({
  moreActions: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    cursor: "pointer",
    fontSize: "14px",
    lineHeight: "24px",
  },
});

const ExpandButton = ({ title }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.moreActions}>
      <span>{title}</span>
      <ExpandMore />
    </div>
  );
};

export default ExpandButton;

interface Props {
  title: string;
}
