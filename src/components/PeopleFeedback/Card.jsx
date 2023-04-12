import React from "react"
import { motion } from "framer-motion"

const Card = ({ active, data }) => {
    return (
        <>
            {/* MOBILE */}
            <motion.div
                key={Math.random()}
                exit={{ scale: 0.1, opacity: 0.2 }}
                initial={{ scale: 0.1, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`sm:hidden block w-full bg-secondary p-8 ${active ? "opacity-100" : "opacity-40"}`}
            >
                <div className="flex gap-3">
                    <div className="w-10 h-10 bg-cream rounded-full"></div>
                    <div>
                        <h4 className="text-base">{data.title}</h4>
                        <span className="text-xs opacity-60 uppercase">{data.subtitle}</span>
                    </div>
                </div>
                <p className="mt-6">{data.description}</p>
            </motion.div>
            {/* DESKTOP */}
            <motion.div
                key={Math.random()}
                // exit={{ scale: 0.1, opacity: 0.2 }}
                // initial={{ scale: 0.1, opacity: 0.5 }}
                // animate={{ scale: 1, opacity: 1 }}
                className={` w-full hidden sm:block  p-8 transition-all ${
                    active ? "opacity-100 bg-secondary" : "opacity-80 bg-primary"
                }`}
            >
                <div className="flex gap-3">
                    <div className="w-10 h-10 bg-cream rounded-full"></div>
                    <div>
                        <h4 className="text-base">{data.title}</h4>
                        <span className="text-xs opacity-60 uppercase">{data.subtitle}</span>
                    </div>
                </div>
                <p className="mt-6">{data.description}</p>
            </motion.div>
        </>
    )
}

export default Card
