import React, { useEffect, useState } from "react"
import H2 from "../StyledComponents/H2"
import Message from "@/components/icons/Message"
import RightArrow from "@/components/icons/RightArrow"
import Card from "./Card"
import { AnimatePresence } from "framer-motion"

const Index = () => {
    const [currentCard, setCurrentCard] = useState(0)
    const [data, setData] = useState([
        {
            active: true,
            title: "HOLA",
        },
        {
            active: false,
            title: "como",
        },
        {
            active: false,
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
        <div className="text-white px-6 pb-20">
            <div className="flex justify-between items-end pt-20 pb-12 sm:justify-start sm:items-center sm:gap-6">
                <H2 className={"w-3/4 sm:text-5xl sm:w-auto"}>What people are saying about us</H2>
                <div className="w-16 sm:w-20">
                    <Message />
                </div>
            </div>
            <div>
                {/* DESKTOP */}
                <div className="hidden sm:flex gap-9">
                    <AnimatePresence>
                        {data.map((el, index) => (
                            <Card key={index} title={el.title} active={el.active} />
                        ))}
                    </AnimatePresence>
                </div>
                {/*MOBILE */}
                <div className="sm:hidden flex">
                    <AnimatePresence mode="wait">
                        {data.map((el, index) => {
                            {
                                return el.active === true && <Card key={index} title={el.title} />
                            }
                        })}
                    </AnimatePresence>
                </div>
            </div>
            <div className="flex justify-end">
                <button onClick={prev}>
                    <RightArrow size="64px" className="rotate-180" />
                </button>
                <button onClick={next}>
                    <RightArrow size="64px" />
                </button>
            </div>
        </div>
    )
}

export default Index
