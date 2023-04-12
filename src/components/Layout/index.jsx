import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Index = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="bg-primary">{children}</div>
            <Footer />
        </>
    )
}

export default Index
