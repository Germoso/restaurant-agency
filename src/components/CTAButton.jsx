import { motion } from "framer-motion"
import DownArrow from "@/components/icons/DownArrow"
import WordCircle from "@/components/icons/WordCircle"
import React from "react"

const CTAButton = ({ color = "#FFFFFC", arrowRotation = 0, className }) => {
    return (
        <div className={`${className} relative w-32 flex justify-center items-center`}>
            <motion.div
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                animate={{ rotate: 360 }}
                className="absolute"
            >
                <WordCircle color={color} />
            </motion.div>
            <div className={`w-10`} style={{ rotate: `${arrowRotation}deg` }}>
                <DownArrow color={color} />
            </div>
        </div>
    )
}

export default CTAButton
