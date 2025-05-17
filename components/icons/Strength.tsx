import * as React from "react";
import { IconProps } from ".";

const Strength = ({ className }: IconProps) => (
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
            fill="url(#paint0_linear_1536_10694)"
            d="m31.638 60.622-24-14A.72.72 0 0 1 7.28 46V18h1.44v27.586l23.642 13.792zM60 58.72H47a.72.72 0 0 1-.72-.72V45.72H34a.72.72 0 0 1-.72-.72V32a.72.72 0 0 1 .72-.72h13a.72.72 0 0 1 .72.72v12.28H60a.72.72 0 0 1 .72.72v13a.72.72 0 0 1-.72.72m-12.28-1.44h11.558V45.72H47.72zm-13-13h11.558V32.72H34.72zM16.72 32h-1.44V12h1.44zm40-2h-1.44V18.414L32 4.834l-7.28 4.232V26h-1.44V8.65c0-.256.136-.494.358-.622l8-4.65a.72.72 0 0 1 .724 0l24 14a.72.72 0 0 1 .358.622z"
        ></path>
        <defs>
            <linearGradient
                id="paint0_linear_1536_10694"
                x1="34"
                x2="34"
                y1="60.622"
                y2="3.281"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#BA4E00"></stop>
                <stop offset="1" stopColor="#FF832B"></stop>
            </linearGradient>
        </defs>
    </svg>
);

export default Strength;
