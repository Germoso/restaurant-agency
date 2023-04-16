import React from "react"
import H3 from "../../../StyledComponents/H3"
import { motion } from "framer-motion"

const Card = ({ data, number }) => {
    return (
        <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="relative border-2 border-black border-solid py-8 px-4 sm:w-[45%] h-64"
        >
            <span className="absolute -top-[20px] bg-cream px-3 text-2xl font-bold">0{number}</span>
            <H3>{data.title}</H3>
            <p className="mt-3 opacity-75">{data.content}</p>
        </motion.div>
    )
}

export default Card
