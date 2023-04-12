import React from "react"
import Logo from "@/components/icons/Logo"
import Instagram from "@/components/icons/Instagram"

const Index = () => {
    return (
        <footer className="bg-secondary text-white text-xs px-6 sm:flex sm:justify-between sm:px-20 sm:items-center sm:py-10">
            <div className="flex flex-col gap-2 container mx-auto">
                <Logo />
                <span>Copyright © 2022 Design UI Template.</span>
                <span>All rights reserved</span>
                <div>
                    <Instagram />
                </div>
            </div>
            <div className="sm:flex sm:gap-40 sm:items-center ">
                <div>
                    <h5 className="text-lg text-center">Company</h5>
                    <ul className="flex flex-col items-center justify-center mt-6  text-sm gap-3 text-white">
                        <Li className="!opacity-100">Home</Li>
                        <Li>Service</Li>
                        <Li>Work</Li>
                        <Li>Blog</Li>
                        <Li>Contact</Li>
                    </ul>
                </div>
                <div className="">
                    <h5 className="text-lg text-center">Company</h5>
                    <ul className="flex flex-col items-center justify-center mt-6  text-sm gap-3 text-white">
                        <Li className="!opacity-100">Home</Li>
                        <Li>Service</Li>
                        <Li>Work</Li>
                        <Li>Blog</Li>
                        <Li>Contact</Li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

const Li = ({ children, className = "" }) => {
    return <li className={`opacity-50 hover:cursor-pointer ${className}`}>{children}</li>
}

export default Index
