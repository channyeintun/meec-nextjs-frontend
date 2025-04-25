import * as React from "react";
import { IconProps } from ".";

const News = ({ className, fill="currentColor" }: IconProps) => (
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
            d="M13 5H9.5v1H13zM13 7.5H9.5v1H13zM13 10H9.5v1H13z"
        ></path>
        <path
            fill={fill}
            d="M14 2.5H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-12 1h5.5v9H2zm6.5 9v-9H14l.001 9z"
        ></path>
    </svg>
);

export default News;
