import React, { FC, ReactElement, useEffect, useState } from "react";
import imgSrcSqr from "../../images/UVUSquareGreen.png";
import imgSrcHor from "../../images/UVUHorizontalGreen.png";

const UVULogo: FC<any> = (): ReactElement => {
  const horImgWidth = "35rem";
  const sqrImgWidth = "12rem";
  const [imageSrc, setImageSrc] = useState<string>(imgSrcHor);
  const [imageWidth, setImageWidth] = useState<string>(horImgWidth);

  const updateImageSource = () => {
    if (window.matchMedia("(max-width: 899px)").matches) {
      setImageSrc(imgSrcSqr); // Use square image for larger screens
      setImageWidth(sqrImgWidth);
    } else {
      setImageSrc(imgSrcHor); // Use horizontal image for smaller screens
      setImageWidth(horImgWidth);
    }
  };

  useEffect(() => {
    updateImageSource(); // Set initial image source
    window.addEventListener("resize", updateImageSource); // Update on resize

    return () => {
      window.removeEventListener("resize", updateImageSource); // Cleanup
    };
  }, []);

  return (
    <div style={{
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: "0",
      // flexGrow: 1,
    }}>
      <img src={imageSrc} alt="UVU Logo" className="image" 
        style={{           
          minWidth: imageWidth, 
        }}/>
    </div>
  );
}

export default UVULogo;
