import { IconProps } from ".";

const X = ({ className }: IconProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        className={className}
    >
        <path
            fill="#fff"
            fillOpacity="0.01"
            d="M0 0h24v24H0z"
            style={{ mixBlendMode: "multiply" }}
        ></path>
        <path
            fill="#fff"
            fillOpacity="0.01"
            d="M0 0h24v24H0z"
            style={{ mixBlendMode: "multiply" }}
        ></path>
        <path
            fill="light-dark(#161616,#ffffff)"
            d="M13.676 10.622 20.233 3h-1.554l-5.693 6.618L8.438 3H3.194l6.876 10.007L3.194 21h1.553l6.013-6.989L15.562 21h5.245zm-2.129 2.474-.696-.997-5.544-7.93h2.387l4.474 6.4.696.996 5.816 8.319h-2.387z"
        ></path>
    </svg>
);

export default X;
