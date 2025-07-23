"use client";

import React, { FC, ReactElement, useEffect, useState } from "react";
import Image from "next/image";
import { Box } from "@mui/material";

const UVULogo: FC = (): ReactElement => {
  const horImgWidth = 560;
  const sqrImgWidth = 192;
  const [imageSrc, setImageSrc] = useState<string>("/images/UVUHorizontalGreen.png");
  const [imageWidth, setImageWidth] = useState<number>(horImgWidth);

  const updateImageSource = () => {
    if (window.matchMedia("(max-width: 899px)").matches) {
      setImageSrc("/images/UVUSquareGreen.png");
      setImageWidth(sqrImgWidth);
    } else {
      setImageSrc("/images/UVUHorizontalGreen.png");
      setImageWidth(horImgWidth);
    }
  };

  useEffect(() => {
    updateImageSource();
    window.addEventListener("resize", updateImageSource);
    return () => {
      window.removeEventListener("resize", updateImageSource);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 0,
      }}
    >
      <Image
        src={imageSrc}
        alt="UVU Logo"
        width={imageWidth}
        height={imageWidth * (imageSrc.includes("Square") ? 1 : 0.3)}
        style={{ objectFit: "contain" }}
      />
    </Box>
  );
};

export default UVULogo;
