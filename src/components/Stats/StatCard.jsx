import useCounter from "@/hooks/useCounter"
import React from "react"

const StatCard = ({ value, title, plus }) => {
    const { valueState } = useCounter(value)
    return (
        <div className="flex flex-col justify-center items-center text-white pt-10 w-full sm:items-start sm:pt-0">
            <span className="text-3xl font-bold sm:text-6xl">
                {valueState}
                {plus ? "+" : null}
            </span>
            <span className="text-base pb-14 sm:pb-4">{title}</span>
            <hr className="w-full" />
        </div>
    )
}

export default StatCard
