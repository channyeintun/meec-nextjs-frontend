import * as React from "react";
import { IconProps } from ".";

const Menu = ({
    className
}: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 16"
        className={className}
    >
        <path fill="#fff" fillOpacity="0.01" d="M0 0h16v16H0z"></path>
        <path
            fill="var(--icon-primary)"
            d="M14 3H2v1h12zM14 12H2v1h12zM14 6H2v1h12zM14 9H2v1h12z"
        ></path>
    </svg>
);

export default Menu;
