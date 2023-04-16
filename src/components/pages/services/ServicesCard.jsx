import Button from "@/components/StyledComponents/Button"
import H3 from "@/components/StyledComponents/H3"
import React from "react"

const PricingCard = ({ name, price, features, mostPopular = false, montly = false }) => {
    return (
        <div
            className={` rounded-2xl px-8 py-12 flex flex-col justify-center items-center gap-2 shadow-lg hover:shadow-xl transition-shadow w-full  ${
                mostPopular ? "bg-secondary text-white" : "bg-white text-black"
            }`}
        >
            <H3>{name}</H3>
            {price && (
                <span className="text-5xl font-bold flex items-center">
                    ${price}
                    {montly && <span className="text-sm mt-2 opacity-30">/Mes</span>}
                </span>
            )}
            <ul className="self-start my-10">
                {features.map((feature) => (
                    <li
                        className="before:content-['✓'] before:text-primary before:font-extrabold before:mr-1 "
                        key={feature}
                    >
                        {feature}
                    </li>
                ))}
            </ul>
            <Button className={"bg-yellow text-black"}>{price ? "Comprar" : "Cotizar"}</Button>
        </div>
    )
}

export default PricingCard
