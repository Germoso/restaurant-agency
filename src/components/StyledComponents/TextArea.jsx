import React from "react"

const TextArea = ({ icon, placeholder = "", value = "", onChange = () => {}, name }) => {
    return (
        <div className="bg-white rounded border-2 border-solid border-black shadow-lg p-4">
            {icon}
            <textarea
                name={name}
                id="textarea"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows={10}
                className="w-full resize-none focus:outline-none"
            ></textarea>
        </div>
    )
}

export default TextArea
