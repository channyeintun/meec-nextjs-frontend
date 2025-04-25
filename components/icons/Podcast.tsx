import * as React from "react";
import { IconProps } from ".";

const Podcast = ({ className, fill }: IconProps) => (
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
            fill={fill}
            d="M11.5 7v1.5a3.5 3.5 0 1 1-7 0V7h-1v1.5a4.5 4.5 0 0 0 4 4.47V14h-2v1h5v-1h-2v-1.03a4.5 4.5 0 0 0 4-4.47V7z"
        ></path>
        <path
            fill={fill}
            d="M8 11a2.5 2.5 0 0 0 2.5-2.5v-5a2.5 2.5 0 0 0-5 0v5A2.5 2.5 0 0 0 8 11M6.5 3.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0z"
        ></path>
    </svg>
);

export default Podcast;
