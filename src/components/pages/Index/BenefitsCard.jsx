import H3 from "@/components/StyledComponents/H3"
import { motion } from "framer-motion"
import React from "react"

const BenefitsCard = ({ title, icon, description, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`border-b border-primary py-4 px-4  ${className}`}
        >
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 flex justify-center items-center bg-yellow  rounded-lg  opacity-50">
                    {icon}
                </div>
                <H3>{title}</H3>
            </div>
            <p className="text-sm opacity-70">{description}</p>
        </motion.div>
    )
}

export default BenefitsCard
