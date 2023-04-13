import React from "react"

const TextInput = ({ icon, placeholder = "", value = "", onChange = () => {}, name }) => {
    return (
        <div className="bg-white rounded border-2 border-solid border-black shadow-lg px-4 flex items-center">
            {icon}
            <input
                type="text"
                placeholder={placeholder}
                className="bg-transparent focus:outline-none py-2 px-4 grow"
                value={value}
                name={name}
                onChange={(e) => onChange(e)}
            />
        </div>
    )
}

export default TextInput
