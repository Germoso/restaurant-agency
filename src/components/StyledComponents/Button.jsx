import React from "react"

const Button = ({ type = "button", children, className, onClick = () => {} }) => {
    return (
        <button
            onClick={onClick}
            className={`w-fit px-4 py-2 rounded hover:shadow transition-all ${className}`}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button
