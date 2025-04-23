import * as React from "react";
import { IconProps } from ".";

const Audio = ({ className }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 512 512"
        className={className}
    >
        <path
            fill="#fff"
            fillOpacity="0.01"
            d="M0 0h512v512H0z"
            style={{ mixBlendMode: "multiply" }}
        ></path>
        <path
            fill="url(#paint0_linear_904_610)"
            d="M256 501.76C120.48 501.76 10.24 391.52 10.24 256S120.48 10.24 256 10.24 501.76 120.48 501.76 256 391.52 501.76 256 501.76m0-480C126.832 21.76 21.76 126.832 21.76 256c0 129.152 105.072 234.24 234.24 234.24 129.152 0 234.24-105.072 234.24-234.24S385.152 21.76 256 21.76M373.76 368h-11.52V144h11.536zm-192 0h-11.52V144h11.52zm96-32h-11.52V176h11.52zm-144-16h-11.52V192h11.52zm288-16h-11.52v-96h11.536zm-192 0h-11.52v-96h11.52zm96-32h-11.52v-32h11.536zm-240 0H74.24v-32h11.52z"
        ></path>
        <defs>
            <linearGradient
                id="paint0_linear_904_610"
                x1="256"
                x2="256"
                y1="10.24"
                y2="501.76"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#BE95FF"></stop>
                <stop offset="1" stopColor="#0F62FE"></stop>
            </linearGradient>
        </defs>
    </svg>
);

export default Audio;
