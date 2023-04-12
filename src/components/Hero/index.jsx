import React from "react"
import WordOutline from "@/components/icons/WordOutline"
import HeroIcon from "@/components/icons/HeroIcon"
import Spiral from "@/components/icons/Spiral"
import CTAButton from "@/components/CTAButton"

const Index = () => {
    return (
        <div className="text-white text-center flex flex-col items-center gap-10 h-screen justify-center pt-16">
            <h1 className="text-3xl sm:text-7xl sm:w-2/3">
                Digital
                <span className="relative p-2">
                    Agency
                    <div className={"absolute top-3 left-0 sm:top-5"}>
                        <WordOutline />
                    </div>
                </span>
                With Solid Design
                <div className="w-12 inline-block ml-2 sm:w-20">
                    <HeroIcon />
                </div>
            </h1>
            <p className="opacity-75 text-base">
                We provide various services to make your business grow and get bigger. Your satisfaction is our first
                priority.
            </p>
            <div className="w-20 relative bottom-5 left-20">
                <Spiral />
            </div>
            <CTAButton className={"sm:w-40"} />
        </div>
    )
}

export default Index
