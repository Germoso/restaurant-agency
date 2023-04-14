import React, { useEffect, useState } from "react"
import H2 from "../StyledComponents/H2"
import TextInput from "../StyledComponents/TextInput"
import TextArea from "../StyledComponents/TextArea"
import CTAButton from "../CTAButton"
import Button from "../StyledComponents/Button"

const Index = () => {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [message, setMessage] = useState("")

    return (
        <div id="contact" className="bg-cream">
            <div className="mx-auto container py-10 px-6 ">
                <H2 className={"pt-6 sm:text-5xl"}>Trabajemos juntos</H2>
                <div className="relative w-full pt-10 flex flex-col items-center justify-start lg:flex-row lg:gap-2 h-fit">
                    <form
                        action="https://formsubmit.co/mailonywilo@gmail.com"
                        method="POST"
                        className="text-lg flex flex-col gap-2 w-full lg:w-2/3"
                    >
                        <TextInput
                            placeholder="Introduce tu nombre"
                            icon={<i class="fa-regular fa-user"></i>}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            value={name}
                            name={"nombre"}
                        />
                        <TextInput
                            onChange={(e) => {
                                setMail(e.target.value)
                            }}
                            value={mail}
                            name={"mail"}
                            placeholder="Introduce tu email"
                            icon={<i class="fa-regular fa-envelope"></i>}
                        />
                        <TextArea
                            onChange={(e) => {
                                setMessage(e.target.value)
                            }}
                            value={message}
                            name={"message"}
                            placeholder="Como te podemos ayudar?"
                        />
                        <Button type="submit" className={"mx-auto"}>
                            Enviar
                        </Button>
                    </form>
                    <CTAButton className={"mx-auto lg:rotate-90 w-40 my-20 lg:mt-0 rotate-180"} color="#000" />
                </div>
            </div>
        </div>
    )
}

export default Index
