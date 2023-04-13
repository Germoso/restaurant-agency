import Layout from "@/components/Layout"
import React from "react"
import Hero from "@/components/Hero"
import Stats from "@/components/Stats"
import Services from "@/components/Services"
import Contact from "@/components/Contact"
import Work from "@/components/Work"
import PeopleFeedback from "@/components/PeopleFeedback"

const services = [
    {
        title: "Web Personalizada",
        content:
            "Sitio web personalizado que se adapta a las necesidades y la marca de su restaurante, utilizando elementos visuales y gráficos que reflejen la identidad visual de su negocio.",
    },
    {
        title: "Mantenimiento y soporte",
        content:
            "Ofrecimiento de mantenimiento y soporte continuo para el sitio web del restaurante, incluyendo actualizaciones de software, correcciones de errores y solución de problemas.",
    },
    {
        title: "Optimización para motores de búsqueda (SEO)",
        content:
            "Optimización de contenido para que el sitio web del restaurante tenga una mejor visibilidad en los resultados de búsqueda.",
    },
    {
        title: "Diseño de menús digitales",
        content: " Creación de menús digitales interactivos para el sitio web del restaurante.",
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
            <Contact />
        </Layout>
    )
}

export default Index
