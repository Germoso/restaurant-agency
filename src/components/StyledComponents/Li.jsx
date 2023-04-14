import React from "react"

const Li = ({ children, className = "" }) => {
    return <li className={`opacity-50 hover:cursor-pointer ${className}`}>{children}</li>
}

export default Li
