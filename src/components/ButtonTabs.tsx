import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    gap: "4px",
  },
  tabButton: {
    color: "var(--secondary-color)",
    borderRadius: "var(--button-radius)",
    cursor: "pointer",
    border: "none",
    background: "none",
    fontWeight: "600",
    fontSize: "14px",
    padding: "8px 6px",
  },
  activeButton: {
    padding: "6px 14px",
    color: "white",
    backgroundColor: "var(--secondary-color)",
  },
});

const ButtonTabs = ({ setValue, value, options }: Props) => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = useState(value || "");

  const handleSelected = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedValue(e.currentTarget.value);
    setValue(e.currentTarget.value);
  };

  return (
    <div className={classes.wrapper}>
      {options.map((option) => (
        <button
          key={option.value}
          className={`${classes.tabButton} ${
            selectedValue === option.value ? classes.activeButton : null
          }`}
          onClick={handleSelected}
          value={option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonTabs;

interface Props {
  setValue: any;
  value: any;
  options: any[];
}
