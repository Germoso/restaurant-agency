import React from "react"
import StatCard from "./StatCard"

const data = [
    {
        title: "Happy Clients",
        value: 40,
    },
    {
        title: "Happy Clients",
        value: 40,
    },
    {
        title: "Happy Clients",
        value: 40,
    },
    {
        title: "Happy Clients",
        value: 40,
    },
]

const Index = () => {
    return (
        <div className="px-6 py-20 bg-secondary">
            <div className="mx-auto container flex flex-col sm:flex-row sm:gap-8">
                {data.map((el, index) => {
                    return <StatCard key={index} value={el.value} title={el.title} />
                })}
            </div>
        </div>
    )
}

export default Index
