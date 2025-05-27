import * as React from "react";
import { IconProps } from ".";

const Checked = ({ className }: IconProps) => (
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
            fill="light-dark(#161616,#ffffff)"
            d="M13 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-6 8.75L4.5 8.271l.795-.771L7 9.173 10.704 5.5l.796.789z"
        ></path>
    </svg>
);

export default Checked;
