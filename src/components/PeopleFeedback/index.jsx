import React, { useEffect, useState } from "react"
import H2 from "../StyledComponents/H2"
import Message from "@/components/icons/Message"
import RightArrow from "@/components/icons/RightArrow"
import Card from "./Card"
import { AnimatePresence } from "framer-motion"
import profile1 from "../../../public/profile-1.jpg"
import profile2 from "../../../public/profile-2.jpg"
import profile3 from "../../../public/profile-3.jpg"

const Index = () => {
    const [currentCard, setCurrentCard] = useState(0)
    const [data, setData] = useState([
        {
            active: false,
            title: "El Rincón del Chef",
            description:
                "Estamos encantados con el nuevo sitio web que nos han diseñado. Han hecho un trabajo increíble al capturar la esencia de nuestro restaurante y destacar nuestros platos de manera visual. ¡Altamente recomendados!",
            subtitle: "",
            photo: profile1,
        },
        {
            active: true,
            title: "La Taberna del Puerto",
            description:
                "Desde el primer acercamiento hasta el lanzamiento del sitio web, el equipo ha sido profesional, amable y muy eficiente. ¡El resultado final ha sido espectacular!",
            subtitle: "",
            photo: profile3,
        },
        {
            active: false,
            title: "Restaurante Nonno",
            description:
                "No solo nos proporcionó un sitio web impresionante, sino que también nos ayudó a mejorar nuestra estrategia de marketing digital. ¡Gracias por todo el apoyo y la orientación!",
            subtitle: "",
            photo: profile2,
        },
    ])

    useEffect(() => {
        setData((data) =>
            data.map((el, index) => {
                // if (!el) return
                console.log(el)
                if (index === currentCard) {
                    el.active = true
                } else {
                    el.active = false
                }
                return el
            })
        )
    }, [currentCard])

    const next = () => {
        if (currentCard < data.length - 1) {
            setCurrentCard((prev) => prev + 1)
        }
    }

    const prev = () => {
        if (currentCard > 0) {
            setCurrentCard((prev) => prev - 1)
        }
    }

    return (
        <div id="feedback" className="text-white px-6 pb-20 mx-auto container">
            <div className="flex justify-between items-end pt-20 pb-12 sm:justify-start sm:items-center sm:gap-6">
                <H2 className={"w-3/4 sm:text-5xl sm:w-auto"}>Lo que nuestros clientes piensan de nosotros</H2>
                <div className="w-16 sm:w-20">
                    <Message />
                </div>
            </div>
            <div>
                {/* DESKTOP */}
                <div className="hidden sm:flex gap-9">
                    <AnimatePresence>
                        {data.map((el, index) => (
                            <Card key={index} data={el} active={el.active} />
                        ))}
                    </AnimatePresence>
                </div>
                {/*MOBILE */}
                <div className="sm:hidden flex">
                    <AnimatePresence mode="wait">
                        {data.map((el, index) => {
                            {
                                return el.active === true && <Card key={index} data={el} />
                            }
                        })}
                    </AnimatePresence>
                </div>
            </div>
            <div className="flex justify-end">
                <button onClick={prev}>
                    <RightArrow size="80px" className="rotate-180" />
                </button>
                <button onClick={next}>
                    <RightArrow size="80px" />
                </button>
            </div>
        </div>
    )
}

export default Index
