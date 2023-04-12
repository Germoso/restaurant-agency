import React from "react"
import Logo from "@/components/icons/Logo"
import Instagram from "@/components/icons/Instagram"

const Index = () => {
    return (
        <footer className="bg-secondary text-white text-xs px-6 sm:flex sm:justify-between sm:px-20 sm:items-center sm:py-10">
            <div className="sm:flex sm:items-start sm:justify-between container mx-auto w-full py-14 ">
                <div className="flex flex-col">
                    <Logo />
                    <span className="mt-2">Copyright© 2023, SaboresWeb</span>
                    <span>All rights reserved</span>
                    <div className="mt-4">
                        <Instagram />
                    </div>
                </div>
                <hr className="mt-10" />
                <div className=" sm:flex  sm:gap-36 items-start ">
                    <div className="mt-16 sm:mt-0">
                        <h5 className="text-lg text-center">Company</h5>
                        <ul className="flex flex-col items-center justify-center mt-6  text-sm gap-3 text-white">
                            <Li className="!opacity-100">Home</Li>
                            <Li>Service</Li>
                            <Li>Work</Li>
                            <Li>Blog</Li>
                            <Li>Contact</Li>
                        </ul>
                    </div>
                    <div className="mt-10 sm:mt-0">
                        <h5 className="text-lg text-center">Soporte</h5>
                        <ul className="flex flex-col items-center justify-center mt-6  text-sm gap-3 text-white">
                            <Li>Terminos de Servicio</Li>
                            <Li>Terminos de Privacidad</Li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const Li = ({ children, className = "" }) => {
    return <li className={`opacity-50 hover:cursor-pointer ${className}`}>{children}</li>
}

export default Index
