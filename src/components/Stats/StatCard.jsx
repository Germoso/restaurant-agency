import useCounter from "@/hooks/useCounter"
import { motion } from "framer-motion"
import React from "react"

const StatCard = ({ value, title, plus }) => {
    const { valueState, setStart } = useCounter(value)

    return (
        <motion.div
            onViewportEnter={() => {
                setStart(true)
            }}
            className="flex flex-col justify-center items-center text-white pt-10 w-full sm:items-start sm:pt-0"
        >
            <span className="text-3xl font-bold sm:text-6xl">
                {valueState}
                {plus ? "+" : null}
            </span>
            <span className="text-base pb-14 sm:pb-4">{title}</span>
            <hr className="w-full" />
        </motion.div>
    )
}

export default StatCard
