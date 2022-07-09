import React from "react";
import Link from "next/link";
import { useTheme } from "@emotion/react";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { createUseStyles } from "react-jss";
import Image from "next/image";
import saLogo from "../../public/static/images/sa-logo-light.svg";
import ImageWrapper from "./ImageWrapper";

const useStyles = createUseStyles({
  nav: {
    background: "var(--primary-color)",
    boxShadow: "var(--box-shadow)",
    height: "80px",
    color: "white",
    display: "flex",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  right: { display: "flex", gap: "32px" },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  link: {
    cursor: "pointer",
    fontSize: "14px",
    color: "whitesmoke",
  },
  activeLink: {
    color: "var(--secondary-color) !important",
  },
});

const Navbar = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const router = useRouter();
  const pathName = router.pathname;

  const links = [
    {
      title: "Home",
      pathName: "/portfolio-comparison",
    },
    {
      title: "Manage deposits",
      pathName: "/",
    },
    {
      title: "Refer a friend",
      pathName: "/",
    },
    {
      title: "Support",
      pathName: "/",
    },
  ];

  return (
    <nav className={classes.nav}>
      <Container>
        <div className={classes.wrapper}>
          <div
            className={classes.logo}
            onClick={() => {
              router.push("/");
            }}
          >
            <ImageWrapper
              src={saLogo}
              width="150px"
              height="60px"
              alt="Connect communities"
            />
          </div>
          <div className={classes.right}>
            {links.map((link, idx) => (
              <Link key={idx} href={link.pathName}>
                <span
                  className={`${classes.link}
                    ${
                      pathName == link.pathName ? classes.activeLink : undefined
                    }
                  `}
                >
                  {link.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
