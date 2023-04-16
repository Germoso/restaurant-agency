import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { MotionConfig } from "framer-motion"
import WhatsappButton from "./WhatsappButton"

const Index = ({ children, className, navBarClassName, logoColor }) => {
    return (
        <MotionConfig transition={{ duration: 0.4, ease: "circOut" }}>
            <Navbar logoColor={logoColor} className={navBarClassName} />
            <div className={`w-full ${className}`}>{children}</div>
            <Footer />
            {/* <WhatsappButton /> */}
        </MotionConfig>
    )
}

export default Index
