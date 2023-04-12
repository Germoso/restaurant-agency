import React from "react"
import WordOutline from "@/components/icons/WordOutline"
import HeroIcon from "@/components/icons/HeroIcon"
import Spiral from "@/components/icons/Spiral"
import CTAButton from "@/components/CTAButton"

const Index = () => {
    return (
        <div className="text-white text-center flex flex-col items-center gap-10 h-screen justify-center pt-16 px-2">
            <h1 className="text-3xl sm:text-6xl sm:w-2/3 relative">
                Un sitio Web que
                <span className="relative p-2">
                    Deleita
                    <div className={"absolute top-[10px] left-[-2px] w-[102%] sm:w-[104%] sm:left-[-4] sm:top-[16px]"}>
                        <WordOutline />
                    </div>
                </span>
                sus Clientes
                <div className="w-12 inline-block ml-2 sm:w-20">
                    <HeroIcon />
                </div>
            </h1>
            <p className="opacity-75 text-base">
                Diseñamos su sitio web para mejorar la experiencia del usuario y reflejar la personalidad de su
                restaurante.
            </p>
            <div className="w-20 relative bottom-5 left-20">
                <Spiral />
            </div>
            <CTAButton className={"sm:w-40"} />
        </div>
    )
}

export default Index
