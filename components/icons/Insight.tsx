import * as React from "react";
import { IconProps } from ".";

const Insight = ({ className, fill = "currentColor" }: IconProps) => (
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
            d="M13.5 12.5H10v1h3.5zM12.5 14.5H11v1h1.5zM13.5 11.5h-1c0-.55.2-1 .6-1.4l.25-.25c.4-.4.65-1 .65-1.6C14 7 13 6 11.75 6S9.5 7 9.5 8.25c0 .6.25 1.15.65 1.6l.25.25c.4.4.6.85.6 1.4h-1c0-.25-.1-.5-.3-.7l-.25-.25c-.6-.6-.95-1.45-.95-2.3C8.5 6.45 9.95 5 11.75 5S15 6.45 15 8.25c0 .85-.35 1.7-.95 2.3l-.25.25c-.2.2-.3.45-.3.7M7 11H3v1h4zM6 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M4.5 9H3v1h1.5zM6.5 7H3v1h3.5zM8.5 5H5v1h3.5zM3.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M10 3H8v1h2zM6.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M5 3H3v1h2z"
        ></path>
        <path
            fill={fill}
            d="M9 14H2V2h9v2h1V2c0-.55-.45-1-1-1H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h7z"
        ></path>
    </svg>
);

export default Insight;
