import * as React from "react";
import { IconProps } from ".";

const KnowledgeSharing = ({ className }: IconProps) => (
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
            fill="url(#paint0_linear_878_6642)"
            d="M62.72 1.28V20h-1.44V3.74L38.51 26.508l-1.02-1.018L60.262 2.72H44V1.28zm-5.44 44H18.72V6.72H36V5.28H18a.72.72 0 0 0-.72.72v40c0 .398.322.72.72.72h40a.72.72 0 0 0 .72-.72V28h-1.44zm-32 16H2.72V38.72H14v-1.44H2a.72.72 0 0 0-.72.72v24c0 .398.322.72.72.72h24a.72.72 0 0 0 .72-.72V50h-1.44z"
        ></path>
        <defs>
            <linearGradient
                id="paint0_linear_878_6642"
                x1="32"
                x2="32"
                y1="62.72"
                y2="1.28"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#198038"></stop>
                <stop offset="1" stopColor="#42BE65"></stop>
            </linearGradient>
        </defs>
    </svg>
);

export default KnowledgeSharing;
