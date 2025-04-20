import * as React from "react";

const ChevronUp = () => (
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
        <path fill="var(--icon-primary)" d="m8 5 5 5-.7.7L8 6.4l-4.3 4.3L3 10z"></path>
    </svg>
);

export default ChevronUp;