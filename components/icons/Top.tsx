import * as React from "react";
import { IconProps } from ".";

const Top = ({ className }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        className={className}
    >
        <path fill="#fff" fillOpacity="0.01" d="M0 0h16v16H0z"></path>
        <path
            fill="#161616"
            d="m8 7-5 5 .7.7L8 8.4l4.3 4.3.7-.7zM14 4H2v1h12z"
        ></path>
    </svg>
);

export default Top;
