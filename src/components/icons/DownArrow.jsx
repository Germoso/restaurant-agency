import React from "react"

function Icon({ color = "#FFFFFC" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" fill="none" viewBox="0 0 34 53">
            <path
                stroke={color}
                strokeWidth="1.511"
                d="M16.726 52.58V.374M.137 34.234c4.214 0 16.59 3.72 16.59 18.427 0-14.707 12.374-18.427 16.588-18.427"
            ></path>
        </svg>
    )
}

export default Icon
