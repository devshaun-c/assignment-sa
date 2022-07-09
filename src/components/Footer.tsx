import React from "react";
import Link from "next/link";
import { useTheme } from "@emotion/react";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  footer: {
    marginTop: "100px",
    padding: "32px 0",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    width: "100%",
    color: "gray",
    fontSize: "12px",
  },
  links: {
    color: "var(--secondary-color)",
    display: "flex",
    gap: "4px",
    cursor: "pointer",
  },
});

const Footer = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <footer className={classes.footer}>
      <Container>
        <div className={classes.wrapper}>
          <div>@2018 Asia Wealth Platform Pte Ltd.</div>
          <div>Licensed by Monetary Authority of Singapore</div>
          <div className={classes.links}>
            <div>Privacy</div>|<div>Platform Agreement</div>|<div>Support</div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
