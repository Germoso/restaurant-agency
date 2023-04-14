import Layout from "@/components/Layout"
import React from "react"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import Services from "@/components/Services"
import Contact from "@/components/Contact"
import Work from "@/components/Work"
import PeopleFeedback from "@/components/PeopleFeedback"

const Index = () => {
    return (
        <Layout>
            <Hero />
            <Services />
            <Stats />
            <Work />
            <PeopleFeedback />
            <Contact />
        </Layout>
    )
}

export default Index
