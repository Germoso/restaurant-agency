import React from "react"
import H2 from "@/components/StyledComponents/H2"
import Star from "@/components/icons/Star"
import CTAButton from "../CTAButton"
import Image from "next/image"
import restoImg from "../../../public/resto.png"
import img2 from "../../../public/img-2.png"
import img3 from "../../../public/img-3.png"

const Index = () => {
    return (
        <div id="work" className="bg-cream w-full px-6 py-20">
            <div className="mx-auto container">
                <H2 className={"flex items-center sm:text-5xl"}>
                    Nuestro Trabajo
                    <div className="w-20">
                        <Star />
                    </div>
                </H2>
                <div className=" grid-rows-3 sm:grid-rows-none sm:grid-cols-12 sm:h-auto grid gap-2 grid-flow-row sm:mt-10 ">
                    <div className="relative bg-yellow col-start-1 col-end-13 sm:col-start-1 sm:col-end-8 sm:row-start-1 sm:row-end-3 flex flex-col items-start justify-center p-4">
                        <Image src={restoImg} alt="Resto" />
                        <span className="absolute bottom-0 left-0 text-2xl font-bold italic w-full pl-4 pb-2">
                            Resto
                        </span>
                    </div>
                    <div className=" bg-secondary col-start-1 col-end-13 sm:col-start-8 sm:col-end-13 sm:row-start-1 sm:row-end-2 flex items-end justify-end pt-4 pl-4 sm:p-0">
                        <Image src={img3} alt="Resto" />
                    </div>
                    <div className="bg-yellow col-start-1 col-end-13 sm:col-start-8 sm:col-end-13 sm:row-start-2 sm:row-end-3 flex items-start justify-start pb-4 pr-4 sm:p-0">
                        <Image src={img2} alt="Resto" className="" />
                    </div>
                </div>
                <a
                    href=""
                    className="flex items-center justify-center mx-auto mt-16 hover:text-white hover:underline sm:justify-end gap-2"
                >
                    <i class="fa-solid fa-up-right-from-square"></i>
                    <CTAButton color="#000" className={" -rotate-[145deg] "} size={40} />
                </a>
            </div>
        </div>
    )
}

export default Index
