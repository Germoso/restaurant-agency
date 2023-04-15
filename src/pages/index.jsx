import Layout from "@/components/Layout"
import React from "react"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import Services from "@/components/pages/Index/Services"
import Contact from "@/components/Contact"
import Work from "@/components/Work"
import PeopleFeedback from "@/components/PeopleFeedback"
import Pricing from "@/components/pages/Index/Pricing"
import H2 from "@/components/StyledComponents/H2"
import Button from "@/components/StyledComponents/Button"
import CTAButton from "@/components/CTAButton"

const Index = () => {
    return (
        <Layout>
            <Hero />
            <div id="service" className="bg-cream text-black px-5 py-20 h-screen ">
                <div className="container mx-auto flex flex-col lg:flex-row lg:gap-5 items-center h-full">
                    <div className="w-full lg:w-3/5">
                        <H2 className={"text-5xl"}>Creamos tu sitio web personalizado totalmente gratis</H2>
                        <p className="opacity-75 pt-4 text-lg">
                            Te ofrecemos la solución más fácil y asequible para tener una presencia en línea exitosa.
                            Creamos y administramos tu sitio web gratis, para que puedas concentrarte en lo que
                            realmente importa: <b>tu negocio de comida.</b>
                        </p>
                    </div>
                    <div className="grow shadow-2xl rounded-xl py-10 px-5 bg-secondary text-white mt-10 flex flex-col">
                        <H2 className={"auto text-center text-4xl"}>Beneficios</H2>
                        <ul className="ml-5 pt-5 flex flex-col gap-2">
                            <Li>Ahorra tiempo y recursos</Li>
                            <Li>Servicio economico y de calidad</Li>
                            <Li>Página web a medida, profesional y atractiva</Li>
                            <Li>Mayor visibilidad en línea</Li>
                            <Li>Actualizaciones regulares y soporte técnico totalmente gratuito</Li>
                        </ul>
                        <Button className={"self-end mt-5 bg-yellow text-black font-bold"}>Ver mas</Button>
                    </div>
                    <CTAButton color="#000" className={"mt-20 ml-auto lg:hidden"} arrowRotation={135} />
                </div>
                <CTAButton color="#000" className={"ml-auto hidden lg:flex"} arrowRotation={135} />
            </div>

            <Services />
            <Stats />
            <Work />
            <PeopleFeedback />
            <Pricing />
            <Contact />
        </Layout>
    )
}

const Li = ({ children }) => {
    return <li className="before:content-['✓'] before:text-primary before:font-extrabold before:mr-1 ">{children}</li>
}

export default Index
