import React from 'react'
import { GraduationCap } from 'lucide-react'
import { Button } from './ui/button'

const AboutBms = () => {
    return (
        <section id="bmsce" className="py-20 bg-muted/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Heading at top */}
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    About B.M.S. College of Engineering
                </h2>
                <div className="w-24 h-1 bg-tech-gradient mx-auto mb-12"></div>

                {/* Content + Image below heading */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left - Text */}
                    <div className="text-center md:text-left">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Established in 1946, BMSCE is India’s first private engineering college,
                            known for academic excellence and innovation.
                        </p>
                        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                            With strong research culture and modern infrastructure, it continues
                            to shape future leaders in technology.
                        </p>

                        {/* Explore More Button */}
                        <Button className="mt-6 rounded-full">
                            <a href="https://www.bmsce.ac.in/" target='_blank'>Explore More</a>
                        </Button>
                    </div>

                    {/* Right - Image */}
                    <div className="flex justify-center">
                        <img
                            src="./images/campus2.jpeg"
                            alt="BMSCE Campus"
                            className="rounded-2xl shadow-lg w-full max-w-lg object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutBms
