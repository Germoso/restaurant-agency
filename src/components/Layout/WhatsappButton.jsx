import React from "react"

const WhatsappButton = () => {
    return (
        <button
            className="w-12 h-12 rounded-full text-2xl bg-green-500 shadow-lg text-white flex justify-center items-center fixed right-10 bottom-10"
            onClick={() => window.open("https://wa.me/917908491063", "_blank")}
        >
            <i class="fa-brands fa-whatsapp"></i>
        </button>
    )
}

export default WhatsappButton
