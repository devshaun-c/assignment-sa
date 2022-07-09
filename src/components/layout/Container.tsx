import React from "react";
import { Container as ContainerMui } from "@mui/material";

const Container = (props: any) => {
  const { children, fullView } = props;
  return (
    <ContainerMui maxWidth="sm" sx={{ height: "100%" }}>
      {children}
    </ContainerMui>
  );
};

export default Container;
