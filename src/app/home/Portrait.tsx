"use client";

import React, { FC, ReactElement } from "react";
import Image from "next/image";
import { Box } from "@mui/material";

const Portrait: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1.5rem",
      }}
    >
      <Image
        src="/images/portrait-mtn.jpg"
        alt="Portrait"
        width={240} // 15rem * 16px/rem = 240px
        height={240} // Adjust based on image aspect ratio
        style={{
          maxWidth: "15rem",
          borderRadius: "1rem",
          objectFit: "contain",
        }}
      />
    </Box>
  );
};

export default Portrait;
