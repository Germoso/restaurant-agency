import React from "react"

const H2 = ({ children, className }) => {
    return <h2 className={`text-3xl font-semibold ${className}`}>{children}</h2>
}

export default H2
