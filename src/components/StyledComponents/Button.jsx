import React from "react"

const Button = ({ type = "button", children, className, onClick = () => {} }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-secondary w-fit px-4 py-2 rounded hover:shadow text-white ${className}`}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button
