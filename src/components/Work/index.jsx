import React from "react"
import H2 from "@/components/StyledComponents/H2"
import Star from "@/components/icons/star"
import CTAButton from "../CTAButton"

const Index = () => {
    return (
        <div className="bg-cream w-full px-6 py-20">
            <div className="mx-auto container">
                <H2 className={"flex items-center sm:text-5xl"}>
                    Our Works
                    <div className="w-20">
                        <Star />
                    </div>
                </H2>
                <div className="grid-cols-12 grid gap-2 grid-flow-row sm:mt-10 ">
                    <div className="h-20 bg-secondary col-start-1 col-end-13 row-span-2 sm:col-start-1 sm:col-end-8 sm:row-start-1 sm:row-end-3 "></div>
                    <div className=" h-20 bg-secondary col-start-1 col-end-13 sm:col-start-8 sm:col-end-13"></div>
                    <div className="  h-20 bg-secondary col-start-1 col-end-13 sm:col-start-8 sm:col-end-13"></div>
                </div>
                <CTAButton color="#000" className={"mx-auto mt-16 sm:mx-0 sm:ml-auto sm:-rotate-90 "} />
            </div>
        </div>
    )
}

export default Index
