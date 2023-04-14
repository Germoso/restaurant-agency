import React from "react"
import Image from "next/image"
import Button from "@/components/StyledComponents/Button"
import CTAButton from "@/components/CTAButton"
const Card = ({ title, img, url, backgroundColor }) => {
    return (
        <div
            style={{ backgroundColor }}
            className="text-white w-full rounded-xl flex flex-col overflow-hidden shadow-xl sm:flex-row border-2 border-solid border-black"
        >
            <div className="w-full sm:h-80 relative overflow-hidden sm:w-fit">
                <Image src={img} alt="imagen" className="w-full h-full object-contain sm:rounded" />
            </div>
            <div
                style={{ backgroundColor }}
                className="flex justify-between items-center p-2 grow sm:flex-col sm:justify-center sm:gap-4"
            >
                <h4 className="font-bold text-black italic sm:text-2xl">{title}</h4>
                <a className="flex items-center justify-center hover:underline hover:text-white text-black hover:cursor-pointer sm:flex-col sm:gap-10">
                    <i class="fa-solid fa-up-right-from-square"></i>
                    <CTAButton color="#000" className={"w-20 -rotate-[145deg]"} size={12} />
                </a>
            </div>
        </div>
    )
}

export default Card
