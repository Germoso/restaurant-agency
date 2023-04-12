import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { MotionConfig } from "framer-motion"

const Index = ({ children }) => {
    return (
        <MotionConfig transition={{ duration: 0.4, ease: "circOut" }}>
            <Navbar />
            <div className="bg-primary w-full">{children}</div>
            <Footer />
        </MotionConfig>
    )
}

export default Index
