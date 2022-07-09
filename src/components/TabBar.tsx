import { Tab, Tabs } from "@mui/material";
import React from "react";

const TabBar = ({ currentTab, setTab, tabs }: Props) => {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };
  return (
    <div>
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
