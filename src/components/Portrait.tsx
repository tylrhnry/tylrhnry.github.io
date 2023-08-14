
import React, { FC, ReactElement } from "react";
import imgSrc from "../images/portrait.png"

const Portrait: FC<any> = (): ReactElement => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            }}
        >
            <img src={imgSrc} alt="Portrait" className="image" 
            style={{ 
                maxWidth: "15rem", 
                borderRadius: "5rem",
            }}/>
        </div>
    );
}

export default Portrait