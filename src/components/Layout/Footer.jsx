import React from "react"
import Logo from "@/components/icons/Logo"
import Instagram from "@/components/icons/Instagram"
import NavLinks from "./NavLinks"
import SocialMediaLinks from "./SocialMediaLinks"

const Index = () => {
    return (
        <footer className="bg-secondary text-white text-xs px-6 sm:flex sm:justify-between sm:px-20 sm:items-center sm:py-2">
            <div className="sm:flex sm:items-center sm:justify-between container mx-auto w-full py-4 ">
                <div className="flex justify-center items-center gap-2">
                    <div className="w-40">
                        <Logo color="#EBE2D9" />
                    </div>
                    <div className="mt-6">
                        <span className="mt-2">Copyright© 2023, SaboresWeb. </span>
                        <span>All rights reserved</span>
                        <ul className="flex text-2xl mt-2 gap-2">
                            <SocialMediaLinks />
                        </ul>
                    </div>
                </div>
                <hr className="mt-4" />
                <div className=" sm:flex  sm:gap-36 items-start ">
                    <div className="mt-4 sm:mt-0">
                        <ul className="flex flex-col items-center justify-center mt-6  text-sm gap-3 text-white sm:flex-row">
                            <NavLinks />
                        </ul>
                    </div>
                    {/* <div className="mt-10 sm:mt-0">
                        <h5 className="text-lg text-center">Soporte</h5>
                        <ul className="flex flex-col items-center justify-center mt-6  text-sm gap-3 text-white">
                            <Li>Terminos de Servicio</Li>
                            <Li>Terminos de Privacidad</Li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </footer>
    )
}

const Li = ({ children, className = "" }) => {
    return <li className={`opacity-50 hover:cursor-pointer ${className}`}>{children}</li>
}

export default Index
