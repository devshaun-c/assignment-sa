import React, { useState } from "react";
import PreviousButton from "./buttons/PreviousButton";
import TabBar, { TabInterface } from "./TabBar";
import { createUseStyles } from "react-jss";
import { Container } from "@mui/material";

const useStyles = createUseStyles({
  pageHeader: {
    backgroundColor: "var(--primary-color)",
    padding: "32px 0 4px 0",
  },

  header: {
    marginBottom: "32px",
  },
  headerTitle: {
    color: "white",
    fontSize: "32px",
    fontWeight: "bold",
  },
});

const PageHeader = ({ title, tabs, setTab, tab }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.pageHeader}>
      <Container>
        <div className={classes.header}>
          <PreviousButton
            title="Overview"
            onClick={() => {
              console.log("back to overview");
            }}
          />
          <div className={classes.headerTitle}>{title}</div>
        </div>
        <TabBar tabs={tabs} currentTab={tab} setTab={setTab} />
      </Container>
    </div>
  );
};

export default PageHeader;

interface Props {
  title: string;
  tab: string;
  setTab: any;
  tabs: TabInterface[];
}
