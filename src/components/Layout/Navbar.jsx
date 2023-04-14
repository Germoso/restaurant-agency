import React, { useState } from "react"
import Hamburger from "@/components/icons/Hamburger"
import Logo from "@/components/icons/Logo"
import { AnimatePresence, motion } from "framer-motion"
import RightArrow from "@/components/icons/RightArrow"
import NavLinks from "./NavLinks"
import Li from "../StyledComponents/Li"
import Link from "next/link"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const closeMenu = () => {
        setIsOpen(false)
    }

    const openMenu = () => {
        setIsOpen(true)
    }

    return (
        <nav className="absolute top-0 left-0 w-full bg-primary h-24 border-b border-white">
            <div className="mx-auto h-full container flex  justify-between items-center px-4 sm:px-6">
                <div className="w-80">
                    <Logo />
                </div>
                {/* MOBILE MENU */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            key="mobile-menu"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            className="z-10 h-screen w-full fixed top-0 left-0 py-20 bg-secondary px-10"
                        >
                            <motion.button
                                transition={{ delay: 0.25, duration: 0.25 }}
                                initial={{ rotateZ: -180 }}
                                animate={{ rotateZ: 0 }}
                                className="absolute"
                                onClick={closeMenu}
                            >
                                <RightArrow />
                            </motion.button>
                            <ul
                                onClick={() => {
                                    setIsOpen(false)
                                }}
                                className="h-full w-full flex flex-col  items-center justify-center  text-base gap-8 text-white"
                            >
                                <Li className="!opacity-100">
                                    <Link href="/"> Home</Link>
                                </Li>
                                <hr className="w-full" />
                                <NavLinks noHome />
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
                {/* DESKTOP MENU */}
                <ul className="sm:flex items-center justify-center  text-base gap-6 text-white hidden">
                    <NavLinks />
                </ul>
                <button className="sm:hidden fixed right-4 z-index-[999]" onClick={openMenu}>
                    <Hamburger size="60px" />
                </button>
            </div>
        </nav>
    )
}

export default Navbar
