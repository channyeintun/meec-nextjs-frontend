import { IconProps } from ".";

const Calendar = ({ className }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
        className={className}
    >
        <path
            fill="#fff"
            fillOpacity="0.01"
            d="M0 0h20v20H0z"
            style={{ mixBlendMode: "multiply" }}
        ></path>
        <path
            fill="#fff"
            fillOpacity="0.01"
            d="M0 0h20v20H0z"
            style={{ mixBlendMode: "multiply" }}
        ></path>
        <path
            fill="#161616"
            d="M16.25 2.5h-2.5V1.25H12.5V2.5h-5V1.25H6.25V2.5h-2.5c-.687 0-1.25.563-1.25 1.25v12.5c0 .688.563 1.25 1.25 1.25h12.5c.688 0 1.25-.562 1.25-1.25V3.75c0-.687-.562-1.25-1.25-1.25m0 13.75H3.75V7.5h12.5zm0-10H3.75v-2.5h2.5V5H7.5V3.75h5V5h1.25V3.75h2.5z"
        ></path>
    </svg>
);

export default Calendar;
