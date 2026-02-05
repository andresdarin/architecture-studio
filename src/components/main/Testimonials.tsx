"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const testimonials = [
    {
        id: 1,
        quote: "El estudio transformó nuestra visión en una realidad que superó nuestras expectativas. La atención a la luz y la materialidad es simplemente inigualable.",
        author: "Sarah Jenkins",
        role: "Residencia Privada",
        project: "Casa Horizon"
    },
    {
        id: 2,
        quote: "Trabajar con el equipo fue una lección de precisión. Entendieron nuestro ethos de marca y lo tradujeron en una experiencia espacial que habla por sí sola.",
        author: "Michael Ross",
        role: "CEO, Ross & Co",
        project: "Sede Urban Studio"
    },
    {
        id: 3,
        quote: "Un proceso fluido de principio a fin. Gestionaron la complejidad de nuestro sitio con elegancia y entregaron un hogar que se siente verdaderamente sereno.",
        author: "Elena Vasquez",
        role: "Propietaria",
        project: "Forest Retreat"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <Section className="bg-[#F5F5F5] py-24 md:py-32 relative overflow-hidden">

            {/* Decorative Quote Mark */}
            <div className="absolute top-12 left-12 text-[200px] leading-none text-black/5 font-serif pointer-events-none select-none">
                “
            </div>

            <Container>
                <div className="max-w-4xl mx-auto relative cursor-grab active:cursor-grabbing" >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#1A1A1A] leading-relaxed mb-8">
                                {testimonials[currentIndex].quote}
                            </p>

                            <div className="flex flex-col items-center">
                                <span className="text-sm font-bold uppercase tracking-widest text-black mb-1">
                                    {testimonials[currentIndex].author}
                                </span>
                                <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                                    {testimonials[currentIndex].role} — {testimonials[currentIndex].project}
                                </span>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="flex justify-center gap-4 mt-12">
                        <button
                            onClick={prevTestimonial}
                            className="p-3 rounded-full border border-black/10 hover:bg-black hover:text-white transition-all duration-300"
                            aria-label="Previous testimonial"
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="p-3 rounded-full border border-black/10 hover:bg-black hover:text-white transition-all duration-300"
                            aria-label="Next testimonial"
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Testimonials;
