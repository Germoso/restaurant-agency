import Layout from "@/components/Layout"
import React from "react"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import Services from "@/components/Services"
import Work from "@/components/Work"
import PeopleFeedback from "@/components/PeopleFeedback"

const services = [
    {
        title: "Web Content",
        content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        title: "Web Content",
        content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        title: "Web Content",
        content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
        title: "Web Content",
        content:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
]

const Index = () => {
    return (
        <Layout>
            <Hero />
            <Services services={services} />
            <Stats />
            <Work />
            <PeopleFeedback />
        </Layout>
    )
}

export default Index
