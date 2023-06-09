import React from "react"
import Layout from "@/components/Layout"
import H2 from "@/components/StyledComponents/H2"
import Star from "@/components/icons/Star"
import resto from "../../public/img/works/resto.png"
import foodee from "../../public/img/works/foodee.jpg"
import img04 from "../../public/img/works/04.png"
import Card from "@/components/pages/Works/Card"
import Head from "next/head"

const Works = ({ data }) => {
    return (
        <Layout>
            <Head>
                <title>Sirviendo Soluciones | Sabores Web</title>
            </Head>
            <div className="bg-cream">
                <div className="mx-auto container px-4 py-20">
                    <H2 className={"flex items-center sm:text-5xl pt-20"}>
                        Portafolio de Diseños
                        <div className="w-20">
                            <Star />
                        </div>
                    </H2>
                    <div className="flex flex-col pt-10 gap-8">
                        {data.map((el, index) => (
                            <Card
                                key={index}
                                img={el.img}
                                title={el.title}
                                url={el.url}
                                backgroundColor={el.backgroundColor}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const getStaticProps = async () => {
    return {
        props: {
            data: [
                {
                    img: resto,
                    title: "Resto",
                    url: "https://resto-green.vercel.app/",
                    backgroundColor: "#fea",
                },
                {
                    img: foodee,
                    title: "Foodee",
                    url: "https://foodee-six.vercel.app/",
                    backgroundColor: "#EDC6B1",
                },
                {
                    img: img04,
                    title: "Sabores Del Mundo",
                    url: "https://sabores-del-mundo.vercel.app/",
                    backgroundColor: "#e1e2af",
                },
            ],
        },
    }
}

export default Works
