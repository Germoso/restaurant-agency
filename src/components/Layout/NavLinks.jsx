import React from "react"
import Li from "../StyledComponents/Li"
import Link from "next/link"

const NavLinks = ({ noHome }) => {
    return (
        <>
            <Li className={`!opacity-100 ${noHome && "hidden"}`}>
                <a href="/"> Home</a>
            </Li>
            <Li>
                <a href="/#service">Service</a>
            </Li>
            <Li>
                <Link href="/works">Work</Link>
            </Li>
            <Li>
                <a href="/#contact">Contact</a>
            </Li>
        </>
    )
}

export default NavLinks
