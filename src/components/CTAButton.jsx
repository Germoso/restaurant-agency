import { motion } from "framer-motion"
import DownArrow from "@/components/icons/DownArrow"
import WordCircle from "@/components/icons/WordCircle"
import React from "react"

const CTAButton = ({ color = "#FFFFFC", arrowRotation = 0, className, size = 32 }) => {
    return (
        <div className={`${className} relative w-32 flex justify-center items-center`}>
            <motion.div
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                animate={{ rotate: 360 }}
                className="absolute"
            >
                <WordCircle color={color} />
            </motion.div>
            <div style={{ rotate: `${arrowRotation}deg`, width: size }}>
                <DownArrow color={color} />
            </div>
        </div>
    )
}

export default CTAButton
