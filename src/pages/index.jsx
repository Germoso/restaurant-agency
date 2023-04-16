import Layout from "@/components/Layout"
import React from "react"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import Services from "@/components/pages/Index/Services"
import Contact from "@/components/Contact"
import Work from "@/components/Work"
import PeopleFeedback from "@/components/PeopleFeedback"
import Star from "@/components/icons/Star"
import Logo from "@/components/icons/Logo"
import H2 from "@/components/StyledComponents/H2"
import Button from "@/components/StyledComponents/Button"
import CTAButton from "@/components/CTAButton"
import BenefitsCard from "@/components/pages/Index/BenefitsCard"
import { motion } from "framer-motion"
import Head from "next/head"

const Index = () => {
    return (
        <Layout logoColor={"#fff"} className={"bg-primary"} navBarClassName={"text-white"}>
            <Head>
                <title>Sirviendo Soluciones | Sabores Web</title>
            </Head>
            <Hero />
            <div id="service" className="bg-cream text-black px-5 py-20 h-screen ">
                <div className="container mx-auto flex flex-col lg:flex-row lg:gap-5 items-center w-full h-fit ">
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="w-full lg:w-3/5"
                    >
                        <H2 className={"text-5xl"}>Creamos tu sitio web personalizado totalmente gratis</H2>
                        <p className="opacity-75 pt-4 text-lg">
                            Te ofrecemos la solución más fácil y asequible para tener una presencia en línea exitosa.
                            Creamos y administramos tu sitio web gratis, para que puedas concentrarte en lo que
                            realmente importa: <b>tu negocio de comida.</b>
                        </p>
                    </motion.div>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="grow shadow-2xl rounded-xl py-10 px-5 bg-secondary text-white mt-10 flex flex-col"
                    >
                        <H2 className={"auto text-center text-4xl"}>Beneficios</H2>
                        <ul className="ml-5 pt-5 flex flex-col gap-2">
                            <Li>Ahorra tiempo y recursos</Li>
                            <Li>Actualizaciones regulares y soporte técnico 24/7 totalmente gratuito</Li>
                            <Li>Servicio accesible y de calidad</Li>
                            <Li>Página web a medida, profesional y atractiva</Li>
                            <Li>Mayor visibilidad en línea</Li>
                        </ul>
                        <Button
                            onClick={() => location.assign("/services")}
                            className={"self-end mt-5 bg-yellow text-black font-bold"}
                        >
                            Ver mas
                        </Button>
                    </motion.div>
                    <CTAButton color="#000" className={"mr-5 mt-16 ml-auto lg:hidden"} arrowRotation={135} />
                </div>
                <CTAButton color="#000" className={"ml-auto hidden mt-16 lg:flex"} arrowRotation={135} />
            </div>

            <Services />
            <Stats />
            <Work />
            <PeopleFeedback />
            {/* <Pricing /> */}
            {/* <div className="bg-cream">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="w-60 mx-auto">
                    <Logo />
                </motion.div>
            </div> */}
            <div className="bg-cream  text-black ">
                <div className="container mx-auto py-20 px-5 relative w-full ">
                    <H2 className={"text-5xl flex items-center"}>
                        Nos encargamos de todo
                        <div className="w-20">
                            <Star />
                        </div>
                    </H2>
                    <motion.div
                        viewport={{ once: true }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="flex flex-col gap-4 mt-4"
                    >
                        <BenefitsCard
                            title={"Deja los detalles técnicos en nuestras manos"}
                            description={
                                "Con nuestro servicio, no tendrás que preocuparte por configuraciones técnicas, hosting, dominio o administración de tu sitio web. Nos encargamos de todo para que tú puedas enfocarte en tu negocio de comida."
                            }
                            icon={<i class="fa-regular fa-face-smile"></i>}
                        />
                        <BenefitsCard
                            title={"Página web profesional y atractiva"}
                            description={
                                "Mostramos la identidad unica de tu negocio y lo hacemos destacar entre la competencia."
                            }
                            icon={<i class="fas fa-desktop"></i>}
                            // className={"lg:row-start-3 lg:row-end-4"}
                        />
                        <BenefitsCard
                            title={"Actualizaciones regulares y soporte técnico"}
                            description={
                                "Realizamos los cambios que solicites y mantenemos tu sitio web actualizado en óptimas condiciones para que no tengas que preocuparte por nada."
                            }
                            icon={<i class="fas fa-wrench"></i>}
                            // className={"lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3"}
                        />
                        <BenefitsCard
                            title={"Presencia en línea sólida"}
                            description={
                                "Creamos un sitio web que les permitirá interactuar con sus clientes en línea, mantener su presencia en línea en constante crecimiento y reafirmar su marca."
                            }
                            icon={<i class="fas fa-globe"></i>}
                            // className={"lg:row-start-4 lg:row-end-5 lg:col-start-2 lg:col-end-3"}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="absolute bottom-5 lg:bottom-0 right-10 w-10"
                    >
                        <Star />
                    </motion.div>
                </div>
            </div>
            <Contact />
        </Layout>
    )
}

const Li = ({ children }) => {
    return <li className="before:content-['✓'] before:text-primary before:font-extrabold before:mr-1 ">{children}</li>
}

export default Index
