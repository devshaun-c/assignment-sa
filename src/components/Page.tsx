import { Box } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Page = ({ children }: Props) => {
  return (
    <Box>
      <Navbar />
      <main>
        <Box>{children}</Box>
      </main>
      <Footer />
    </Box>
  );
};

export default Page;

interface Props {
  children: JSX.Element[];
}
