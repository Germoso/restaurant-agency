import React from "react"
import WordOutline from "@/components/icons/WordOutline"
import Spiral from "@/components/icons/Spiral"
import CTAButton from "@/components/CTAButton"
import { motion } from "framer-motion"

const Index = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="hero"
            className="text-white text-center flex flex-col items-center gap-10 h-screen justify-center pt-16 px-2"
        >
            <h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-3xl sm:text-6xl sm:w-2/3 relative"
            >
                Una Agencia que
                <span className="relative p-2">
                    Deleita
                    <div className={"absolute top-[10px] left-[-2px] w-[102%] sm:w-[104%] sm:left-[-4] sm:top-[16px]"}>
                        <WordOutline />
                    </div>
                </span>
                sus Clientes
            </h1>
            <p className="opacity-75 text-base">
                Diseñamos su sitio web para mejorar la experiencia del usuario y reflejar la personalidad de su
                restaurante.
            </p>
            <div className="w-20 relative bottom-5 left-20">
                <Spiral />
            </div>
            <CTAButton className={"sm:w-40"} />
        </motion.div>
    )
}

export default Index
