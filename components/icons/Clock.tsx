import * as React from "react";
import { IconProps } from ".";

const Clock = ({ className }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
        className={className}
    >
        <path
            fill="#fff"
            fillOpacity="0.01"
            d="M0 0h20v20H0z"
            style={{ mixBlendMode: "multiply" }}
        ></path>
        <path
            fill="#fff"
            fillOpacity="0.01"
            d="M0 0h20v20H0z"
            style={{ mixBlendMode: "multiply" }}
        ></path>
        <path
            fill="#161616"
            d="M10 18.75a8.75 8.75 0 1 1 0-17.5 8.75 8.75 0 0 1 0 17.5M10 2.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15"
        ></path>
        <path
            fill="#161616"
            d="m12.869 13.75-3.494-3.494V4.375h1.25v5.363l3.125 3.13z"
        ></path>
    </svg>
);

export default Clock;
