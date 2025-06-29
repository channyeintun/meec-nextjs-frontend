import * as React from "react";
import { IconProps } from ".";

const Pdf = ({ className }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        className={className}
    >
        <path
            fill="#fff"
            fillOpacity="0.01"
            d="M0 0h16v16H0z"
            style={{ mixBlendMode: "multiply" }}
        ></path>
        <path
            fill="currentColor"
            d="M15 9V8h-3v5h1v-2h1.5v-1H13V9zM9.5 13h-2V8h2A1.5 1.5 0 0 1 11 9.5v2A1.5 1.5 0 0 1 9.5 13m-1-1h1a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-1zM5.5 8H3v5h1v-1.5h1.5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1M4 10.5V9h1.5v1.5z"
        ></path>
        <path
            fill="currentColor"
            d="M11 7V5a.45.45 0 0 0-.15-.35l-3.5-3.5A.45.45 0 0 0 7 1H2a1.003 1.003 0 0 0-1 1v12a1 1 0 0 0 1 1h8v-1H2V2h4v3a1.003 1.003 0 0 0 1 1h3v1zM7 5V2.2L9.8 5z"
        ></path>
    </svg>
);

export default Pdf;
