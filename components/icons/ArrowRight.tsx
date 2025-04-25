import * as React from "react";
import { IconProps } from ".";

const ArrowRight = ({ className, fill = "currentColor" }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
        className={className}
    >
        <path fill="#fff" fillOpacity="0.01" d="M0 0h20v20H0z"></path>
        <path
            fill={fill}
            d="m11.25 3.75-.894.87 4.738 4.755H2.5v1.25h12.594l-4.738 4.733.894.892L17.5 10z"
        ></path>
    </svg>
);

export default ArrowRight;
