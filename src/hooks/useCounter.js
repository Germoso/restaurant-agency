import React, { useState, useEffect, useRef } from "react"

const useCounter = (value) => {
    const [valueState, setValueState] = useState(0)
    const [start, setStart] = useState(false)
    const timer = useRef(null)
    useEffect(() => {
        if (start) {
            timer.current = setInterval((e) => {
                setValueState((prev) => prev + 1)
            }, 50)
            return () => clearInterval(timer.current)
        }
    }, [start])

    useEffect(() => {
        if (value == valueState) {
            clearInterval(timer.current)
        }
    }, [valueState])

    return {
        valueState,
        setStart,
    }
}

export default useCounter
