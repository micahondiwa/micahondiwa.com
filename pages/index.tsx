import React from "react"
import Layout from "../src/components/layout"
import Seo from "../src/components/seo"
import Footer from "@/components/footer"
import Projects from "@/components/Projects"

const Index = () => {
    return (
        <Layout>
            <Seo
                title="Micah Ondiwa"
                description="Python Full-Stack ML Software Engineer based in Nairobi, Kenya"
            />
            <section className="hero container mx-auto py-8">
                <div className="hero__inner text-center">
                    <h1 className="hero__title text-5xl font-bold mb-1">
                        Hello, I’m <span className="hero__name text-indigo-600">Micah Ondiwa</span>{" "}
                        <span role="img" aria-label="wave">
                            👋
                        </span>
                    </h1>
                    <p className="hero__subtitle text-xl text-gray-700">
                        Python Full Stack (Django + React) ML/AI Software Engineer based in Nairobi, Kenya.
                    </p>
                    {<Projects />}
                    {<Footer />}
                </div>

            </section>
        </Layout>
    )
}

export default Index
