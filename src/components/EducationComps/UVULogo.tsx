import React, { FC, ReactElement, useEffect, useState } from "react";
import imgSrcSqr from "../../images/UVUSquareGreen.png";
import imgSrcHor from "../../images/UVUHorizontalGreen.png";

const UVULogo: FC<any> = (): ReactElement => {
  const horImgWidth = "25rem";
  const sqrImgWidth = "25rem";
  const [imageSrc, setImageSrc] = useState<string>(imgSrcHor);
  const [imageWidth, setImageWidth] = useState<string>(horImgWidth);

  const updateImageSource = () => {
    if (window.matchMedia("(max-width: 899px)").matches) {
      setImageSrc(imgSrcHor); // Use horizontal image for smaller screens
      setImageWidth(horImgWidth);
    } else {
      setImageSrc(imgSrcSqr); // Use square image for larger screens
      setImageWidth(sqrImgWidth);
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
      justifyContent: "center",
      alignItems: "center",
      padding: "0",
    }}>
      <img src={imageSrc} alt="UVU Logo" className="image" 
        style={{ 
          minWidth: imageWidth, 
          // borderRadius: "3rem",
        }}/>
    </div>
  );
}

export default UVULogo;
