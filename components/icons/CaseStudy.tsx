import * as React from "react";
import { IconProps } from ".";

const CaseStudy = ({ className, fill="currentColor" }: IconProps) => (
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
            d="m11 13.59-1.295-1.295L9 13l2 2 4-4-.705-.705z"
        ></path>
        <path
            fill={fill}
            d="M7.5 14H4V2h4v3a1.003 1.003 0 0 0 1 1h3v3h1V5a.45.45 0 0 0-.15-.35l-3.5-3.5A.45.45 0 0 0 9 1H4a1.003 1.003 0 0 0-1 1v12a1.003 1.003 0 0 0 1 1h3.5zM9 2.2 11.8 5H9z"
        ></path>
    </svg>
);

export default CaseStudy;
