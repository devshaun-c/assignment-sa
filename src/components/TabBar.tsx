import React from "react";
import { Tab, Tabs } from "@mui/material";
import { createUseStyles } from "react-jss";
import { ExpandMore } from "@mui/icons-material";
import ExpandButton from "./buttons/ExpandButton";

const useStyles = createUseStyles({
  tabBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
    fontSize: "14px",
  },
  moreActions: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    cursor: "pointer",
  },
});

const TabBar = ({ currentTab, setTab, tabs }: Props) => {
  const classes = useStyles();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };
  return (
    <div className={classes.tabBar}>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        {tabs.map((tab, idx) => (
          <Tab
            sx={{ textTransform: "capitalize", color: "whitesmoke" }}
            key={idx}
            label={tab.label}
            value={tab.value}
          />
        ))}
      </Tabs>
      <ExpandButton title="More actions" />
    </div>
  );
};

export default TabBar;

interface Props {
  currentTab: string;
  tabs: TabInterface[];
  setTab: any;
}

export interface TabInterface {
  value: string;
  label: string;
}
