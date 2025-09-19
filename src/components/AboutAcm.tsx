import React from 'react'
import { Code } from 'lucide-react'
import { Button } from './ui/button'

const AboutAcm = () => {
    return (
        <section id="bmsce-acm" className="py-20 section-gradient">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Heading */}
                <Code className="h-12 w-12 text-primary mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    About BMSCE ACM Student Chapter
                </h2>
                <div className="w-24 h-1 bg-tech-gradient mx-auto mb-12"></div>

                {/* Content + Image */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left - Text */}
                    <div className="text-center md:text-left">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            The ACM Student Chapter operating under the Department of Machine Learning at B.M.S. College of Engineering fosters innovation, collaboration,
                            and learning in computer science and technology.
                        </p>
                        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                            Through events, workshops, and mentorship, it empowers students to
                            grow beyond the classroom.
                        </p>

                        {/* Optional Button */}
                        <Button className="mt-6 rounded-full">
                            <a href="https://bmsce.acm.org/" target='_blank'>Explore More</a>
                        </Button>
                    </div>

                    {/* Right - Image */}
                    <div className="flex justify-center">
                        <img
                            src="./images/acm.jpg"
                            alt="BMSCE ACM Student Chapter"
                            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutAcm

