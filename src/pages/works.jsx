import React from "react"
import Layout from "@/components/Layout"
import H2 from "@/components/StyledComponents/H2"
import Star from "@/components/icons/Star"
import resto from "../../public/img/works/resto.png"
import foodee from "../../public/img/works/foodee.jpg"
import Card from "@/components/pages/Works/Card"

const Works = ({ data }) => {
    return (
        <Layout>
            <div className="bg-cream">
                <div className="mx-auto container px-4 py-16">
                    <H2 className={"flex items-center sm:text-5xl"}>
                        Nuestro Trabajo
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
                // {
                //     img: img3,
                //     title: "Nombre del proyecto",
                //     url: "URM PAPA",
                //     backgroundColor: "#7C96AB",
                // },
            ],
        },
    }
}

export default Works
