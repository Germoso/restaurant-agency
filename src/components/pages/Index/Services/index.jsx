import React from "react"
import H2 from "@/components/StyledComponents/H2"
import Card from "@/components/pages/Index/Services/Card"
import CTAButton from "../../../CTAButton"
import { motion } from "framer-motion"

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
        <div id="service" className="bg-cream text-black px-5 py-20 pt-80 lg:pt-0">
            <div className="relative container mx-auto flex flex-col sm:flex-row sm:items-center">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="sm:w-1/2">
                    <H2 className={"text-5xl"}>Lleve su negocio al siguiente nivel con nuestros servicios.</H2>
                    <p className="opacity-75 pt-4 text-lg">
                        Ofrecemos servicios integrales para el crecimiento de su negocio. Nos apasiona ayudarlo a
                        alcanzar sus objetivos y estamos comprometidos con su satisfacción.
                    </p>
                    <CTAButton color="#101828" arrowRotation={180} className="pt-16 hidden sm:flex w-40 mt-10" />
                </motion.div>

                <motion.div className="gap-7 flex flex-col mt-16 sm:flex-row sm:flex-wrap sm:justify-center sm:items-start sm:gap-0 sm:w-1/2">
                    {services.map((el, index) => (
                        <Card key={index} data={el} number={index + 1} />
                    ))}
                </motion.div>
                {/* <CTAButton color="#101828" arrowRotation={180} className="mx-auto pt-16 sm:hidden " /> */}
            </div>
        </div>
    )
}

export default Index
