import React from "react"

function Icon({ fill = "#FFFFFC", size = "40px" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill="none"
            viewBox="0 0 48 48"
            className="hover:cursor-pointer"
        >
            <path
                fill={fill}
                d="M14 17.995c0-.55.446-.995.995-.995h8.01a.995.995 0 110 1.99h-8.01a.995.995 0 01-.995-.995zM14 24c0-.55.446-.995.995-.995h18.01a.995.995 0 110 1.99h-18.01A.995.995 0 0114 24zm.995 5.01a.995.995 0 100 1.99h12.01a.995.995 0 100-1.99h-12.01z"
            ></path>
        </svg>
    )
}

export default Icon
