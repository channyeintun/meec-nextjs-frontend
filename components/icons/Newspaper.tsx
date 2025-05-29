import { IconProps } from ".";

const Newspaper = ({ className, fill = "currentColor" }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        className={className}
    >
        <path
            fill="#fff"
            fillOpacity="0.01"
            d="M0 0h16v16H0z"
            style={{ mixBlendMode: "multiply" }}
        ></path>
        <path
            fill={fill}
            d="M7 12H2v1h5zM7 9H2v1h5zM13 7H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1M3 3v3h10V3zM13 14h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1m-3-4v3h3v-3z"
        ></path>
    </svg>
);

export default Newspaper;
