import React from "react"
import Layout from "@/components/Layout"
import H2 from "@/components/StyledComponents/H2"
import PricingCard from "./PricingCard"

const data = [
    {
        name: "Basico",
        price: "25",
        features: ["Una pagina web"],
        mostPopular: true,
    },
    // {
    //     name: "Inicial",
    //     price: "0",
    //     features: ["Una pagina web"],
    //     mostPopular: false,
    // },
    // {
    //     name: "Inicial",
    //     price: "0",
    //     features: ["Una pagina web", "un sito"],
    //     mostPopular: false,
    // },
]

const Pricing = () => {
    return (
        <Layout>
            <div className="bg-cream">
                <div className="container mx-auto px-6">
                    <H2>Tu comodidad es nuestra preocupacion</H2>
                    <p>
                        Olvidate de pagar configuraciones, hosting, dominio, administracion, etc. Lo hacemos todo por
                        ti.
                    </p>
                    <div className="flex flex-col gap-6">
                        {data.map((item, index) => (
                            <PricingCard
                                key={index}
                                name={item.name}
                                price={item.price}
                                features={item.features}
                                mostPopular={item.mostPopular}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Pricing
