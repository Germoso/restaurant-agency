import React, { useState, useEffect, useRef } from "react"

const useCounter = (value) => {
    const [valueState, setValueState] = useState(0)
    const timer = useRef(null)
    useEffect(() => {
        timer.current = setInterval((e) => {
            setValueState((prev) => prev + 1)
        }, 50)
        return () => clearInterval(timer.current)
    }, [])

    useEffect(() => {
        if (value == valueState) {
            clearInterval(timer.current)
        }
    }, [valueState])

    return {
        valueState,
    }
}

export default useCounter
