import React from "react"
import Layout from "@/components/Layout"
import CTAButton from "@/components/CTAButton"
import H2 from "@/components/StyledComponents/H2"
import ServicesCard from "@/components/pages/services/ServicesCard"
import StarShooting from "@/components/icons/StarShooting"

const Services = () => {
    return (
        <Layout className={"bg-cream"} navBarClassName={"text-black"} logoColor={"#000"}>
            <div className="container mx-auto text-black px-6 ">
                <header className="h-screen flex flex-col justify-center items-center">
                    <h1 className="text-3xl sm:text-7xl sm:w-2/3 relative mx-auto text-center">
                        Nos adaptamos a tus necesidades
                    </h1>
                    <p>Obten el sitio web perfecto para tu negocio solo por $25USD</p>

                    <CTAButton color="#000" className={"mx-auto mt-20"} />
                </header>
                <main className="min-h-screen py-20 flex flex-col justify-center items-center w-full">
                    <H2 className={"text-4xl"}>
                        Escoge el plan que mas se adecue a ti{" "}
                        <div className="inline-block w-10">
                            <StarShooting />
                        </div>
                    </H2>
                    <section className="flex flex-col gap-4 w-full mt-10 sm:flex-row">
                        <ServicesCard features={["1", "2", "3"]} mostPopular name={"Basico"} price={"25"} montly />
                        <ServicesCard features={["1", "2", "3"]} name={"Personalizado"} price={""} />
                    </section>
                </main>
            </div>
        </Layout>
    )
}

export default Services
