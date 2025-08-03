import React from "react";

const Points = ({ amount, size = 24 }) => {
    return (
        <span className="inline-flex items-center space-x-1">
      <span
          className="rounded-full flex items-center justify-center"
          style={{
              width: size,
              height: size,
              backgroundColor: "#000000", // black circle
              padding: "2px",
          }}
      >
        <img
            src="/reyva-r-logo.png" // Make sure it's in public folder and correctly named
            alt="R Points"
            style={{
                width: size * 0.75,
                height: size * 0.75,
                objectFit: "contain",
            }}
        />
      </span>
      <span>{amount}</span>
    </span>
    );
};

export default Points;
