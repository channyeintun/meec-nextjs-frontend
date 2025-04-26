import * as React from "react";
import { IconProps } from ".";

const ArrowOutward = ({ className, fill="currentColor" }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
        className={className}
    >
        <g fill={fill} clipPath="url(#clip0_904_605)">
            <path fillOpacity="0.01" d="M0 0h20v20H0z"></path>
            <path d="M6.25 3.75V5h7.869L3.75 15.369l.881.881L15 5.881v7.869h1.25v-10z"></path>
        </g>
        <defs>
            <clipPath id="clip0_904_605">
                <path fill={fill} d="M0 0h20v20H0z"></path>
            </clipPath>
        </defs>
    </svg>
);

export default ArrowOutward;
