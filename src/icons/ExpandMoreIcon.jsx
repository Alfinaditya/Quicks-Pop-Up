import React from "react";

const ExpandMoreIcon = ({ hideMore = false, ...props }) => {
  return (
    <>
      {hideMore ? (
        <svg
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M1.175 7.08753L5 3.27086L8.825 7.08752L10 5.91252L5 0.912526L-1.02722e-07 5.91253L1.175 7.08753Z"
            fill="#4F4F4F"
          />
        </svg>
      ) : (
        <svg
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.59807 0.912508L5.77307 4.72917L1.94807 0.912506L0.773071 2.08751L5.77307 7.08751L10.7731 2.08751L9.59807 0.912508Z"
            fill="#4F4F4F"
          />
        </svg>
      )}
    </>
  );
};

export default ExpandMoreIcon;
