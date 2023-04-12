import React from "react"

function Icon({ size = "48", color = "#FFFFFC", className = "" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            width={size}
            height={size}
            fill="none"
            viewBox="0 0 48 48"
        >
            <path
                fill={color}
                fillRule="evenodd"
                d="M13.5 24a.75.75 0 01.75-.75h17.69l-4.721-4.719a.75.75 0 011.062-1.062l6 6a.75.75 0 010 1.062l-6 6a.75.75 0 01-1.062-1.062l4.72-4.719H14.25a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
            ></path>
        </svg>
    )
}

export default Icon
