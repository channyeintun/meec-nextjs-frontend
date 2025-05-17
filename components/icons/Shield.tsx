import * as React from "react";
import { IconProps } from ".";

const Shield = ({
    className
}: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        fill="none"
        viewBox="0 0 64 64"
        className={className}
    >
        <path
            fill="#fff"
            fillOpacity="0.01"
            d="M0 0h64v64H0z"
            style={{ mixBlendMode: "multiply" }}
        ></path>
        <path
            fill="url(#paint0_linear_1536_10679)"
            d="M32 54.72c-9.22 0-16.72-7.502-16.72-16.72V19.554L32 11.196l16.72 8.36V38c0 9.218-7.502 16.72-16.72 16.72M16.72 20.446V38c0 8.426 6.854 15.28 15.28 15.28S47.28 46.426 47.28 38V20.446L32 12.804zM8 18.72a.72.72 0 0 1-.72-.72v-4a.72.72 0 1 1 1.44 0v4a.72.72 0 0 1-.72.72m6-6h-4a.72.72 0 1 1 0-1.44h4a.72.72 0 1 1 0 1.44m-8 0H2a.72.72 0 1 1 0-1.44h4a.72.72 0 1 1 0 1.44m2-2a.72.72 0 0 1-.72-.72V6a.72.72 0 1 1 1.44 0v4a.72.72 0 0 1-.72.72m54 0a.72.72 0 0 1-.51-.21l-2-2a.72.72 0 0 1 1.02-1.018l2 2A.718.718 0 0 1 62 10.72m-8 0a.72.72 0 0 1-.51-1.228l2-2a.72.72 0 0 1 1.02 1.018l-2 2a.72.72 0 0 1-.51.21m6-6a.72.72 0 0 1-.51-1.228l2-2a.72.72 0 0 1 1.02 1.018l-2 2a.72.72 0 0 1-.51.21m-4 0a.72.72 0 0 1-.51-.21l-2-2a.72.72 0 0 1 1.02-1.018l2 2A.718.718 0 0 1 56 4.72m-2 58a.72.72 0 0 1-.72-.72v-4a.72.72 0 1 1 1.44 0v4a.72.72 0 0 1-.72.72m6-6h-4a.72.72 0 1 1 0-1.44h4a.72.72 0 1 1 0 1.44m-8 0h-4a.72.72 0 1 1 0-1.44h4a.72.72 0 1 1 0 1.44m2-2a.72.72 0 0 1-.72-.72v-4a.72.72 0 1 1 1.44 0v4a.72.72 0 0 1-.72.72"
        ></path>
        <defs>
            <linearGradient
                id="paint0_linear_1536_10679"
                x1="32.001"
                x2="32.001"
                y1="62.72"
                y2="1.281"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#0F62FE"></stop>
                <stop offset="1" stopColor="#78A9FF"></stop>
            </linearGradient>
        </defs>
    </svg>
);

export default Shield;
