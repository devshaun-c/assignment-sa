import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({});

const ImageWrapper = (props: imageWrapperInterface) => {
  const { src = "", width = "24px", height = "24px", alt = "image" } = props;
  const classes = useStyles();

  return (
    <Box
      sx={{
        minWidth: width,
        minHeight: height,
        maxWidth: width,
        maxHeight: height,
        position: "relative",
      }}
    >
      {src && <Image src={src} layout="fill" objectFit="contain" alt={alt} />}
    </Box>
  );
};

export default ImageWrapper;

interface imageWrapperInterface {
  src: string | StaticImageData;
  alt?: string;
  width?: string;
  height?: string;
}
