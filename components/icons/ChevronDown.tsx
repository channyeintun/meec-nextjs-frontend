import * as React from "react";

const ChevronDown = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        className="min-w-[16px] min-h-[16px]"
    >
        <path
            fill="#fff"
            fillOpacity="0.01"
            d="M0 0h16v16H0z"
            style={{ mixBlendMode: "multiply" }}
        ></path>
        <path fill="var(--icon-primary)" d="M8 11 3 6l.7-.7L8 9.6l4.3-4.3.7.7z"></path>
    </svg>
);

export default ChevronDown;
