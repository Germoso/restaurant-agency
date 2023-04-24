import React from "react"
import StatCard from "./StatCard"

const data = [
    {
        title: "Años de Experiencia",
        value: 2,
        plus: true,
    },
    {
        title: "Clientes Activos",
        value: 12,
        plus: false,
    },
    // {
    //     title: "Tiempo Promedio de Entrega (Dias)",
    //     value: 12,
    //     plus: false,
    // },
    {
        title: "Proyectos Terminados",
        value: 28,
        plus: true,
    },
]

const Index = () => {
    return (
        <div id="stats" className="px-6 py-20 bg-secondary">
            <div className="mx-auto container flex flex-col sm:flex-row sm:gap-8">
                {data.map((el, index) => {
                    return <StatCard key={index} value={el.value} title={el.title} plus={el.plus} />
                })}
            </div>
        </div>
    )
}

export default Index
