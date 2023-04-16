import React from "react"
import Layout from "@/components/Layout"
import CTAButton from "@/components/CTAButton"
import H2 from "@/components/StyledComponents/H2"
import ServicesCard from "@/components/pages/services/ServicesCard"
import StarShooting from "@/components/icons/StarShooting"
import Head from "next/head"

const basico = [
    "Hosting Incluido",
    "Dominio personalizado incluido",
    "Mantenimiento incluido",
    "Soporte 24/7 incluido",
    "Sitio web personalizado a medida ",
    "Adaptado a todos los dispositivos",
    "Seguro",
    "Modificaciones en cualquier momento incluidas",
]

const planPersonalizado = [
    "Sitio Web Personalizado y profesional", // Diseño web
    "Adaptado a todos los dispositivos", // Adaptabilidad
    "Seguridad y privacidad avanzada", // Seguridad
    "Asesoría técnica y soporte para la gestión del sitio web",
    "Panel administrativo (opcional)",
    "Codigo fuente del sitio",
]

const Services = () => {
    return (
        <Layout className={"bg-cream"} navBarClassName={"text-black"} logoColor={"#000"}>
            <Head>
                <title>Sirviendo Soluciones | Sabores Web</title>
            </Head>
            <div className="container mx-auto text-black px-6 ">
                <header className="h-screen flex flex-col justify-center items-center">
                    <h1 className="text-5xl sm:text-7xl sm:w-2/3 relative mx-auto text-center">
                        Nos adaptamos a tus necesidades
                    </h1>
                    <p className="text-sm">Obten el sitio web perfecto para tu negocio solo por $25USD</p>

                    <CTAButton color="#000" className={"mx-auto mt-20"} />
                </header>
                <main className="min-h-screen py-20 flex flex-col justify-center items-center w-full">
                    <H2 className={"text-4xl"}>
                        Escoge el plan que mas se adecue a ti{" "}
                        <div className="inline-block w-10">
                            <StarShooting />
                        </div>
                    </H2>
                    <section className="flex flex-col gap-4 w-full justify-center mt-16 sm:flex-row">
                        <ServicesCard features={basico} mostPopular name={"Basico"} price={"25"} montly />
                        <ServicesCard features={planPersonalizado} name={"Personalizado"} price={""} />
                    </section>
                </main>
            </div>
        </Layout>
    )
}

export default Services
