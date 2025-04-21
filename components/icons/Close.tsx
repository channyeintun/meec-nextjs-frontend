import * as React from "react";

interface CloseProps {
    className?: string;
}

const Close = ({ className }: CloseProps) => (
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
            d="m12 4.7-.7-.7L8 7.3 4.7 4l-.7.7L7.3 8 4 11.3l.7.7L8 8.7l3.3 3.3.7-.7L8.7 8z"
        ></path>
    </svg>
);

export default Close;
