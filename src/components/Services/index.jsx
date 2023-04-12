import React from "react"
import H2 from "@/components/StyledComponents/H2"
import Card from "@/components/Services/Card"
import CTAButton from "../CTAButton"

const Index = ({ services }) => {
    return (
        <div className="bg-cream text-black px-5 py-20">
            <div className="relative container mx-auto flex flex-col sm:flex-row sm:items-center">
                <div className="sm:w-1/2">
                    <H2 className={"text-5xl"}>Lleve su negocio al siguiente nivel con nuestra experiencia.</H2>
                    <p className="opacity-75 pt-4 text-lg">
                        Ofrecemos servicios integrales para el crecimiento de su negocio. Nos apasiona ayudarlo a
                        alcanzar sus objetivos y estamos comprometidos con su satisfacción.
                    </p>
                    <CTAButton color="#101828" arrowRotation={-145} className="pt-16 hidden sm:flex w-40 mt-10" />
                </div>
                <div className="gap-7 flex flex-col mt-16 sm:flex-row sm:flex-wrap sm:justify-center sm:items-start sm:gap-0 sm:w-1/2">
                    {services.map((el, index) => (
                        <Card key={index} data={el} number={index + 1} />
                    ))}
                </div>
                <CTAButton color="#101828" arrowRotation={-145} className="mx-auto pt-16 sm:hidden " />
            </div>
        </div>
    )
}

export default Index
