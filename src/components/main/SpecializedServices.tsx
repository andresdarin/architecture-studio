"use client";

import React from "react";
import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const services = [
    {
        title: "Residencial de Lujo",
        description: "Espacios de vida a medida diseñados para mejorar el ritual diario, enfocándose en la privacidad, la luz y la calidez material.",
    },
    {
        title: "Comercial & Retail",
        description: "Entornos estratégicos que amplifican la identidad de marca y la experiencia del cliente a través de la narrativa espacial.",
    },
    {
        title: "Interiores Corporativos",
        description: "Lugares de trabajo que fomentan la colaboración y la eficiencia, mezclando la función ergonómica con una estética inspiradora.",
    },
];

const SpecializedServices = () => {
    return (
        <Section className="bg-[#F5F5F5] py-20 md:py-32 border-b border-black/5">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-display text-4xl md:text-5xl text-[#1A1A1A]">
                            Experiencia <br /> Especializada
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="max-w-md text-gray-600 font-light leading-relaxed md:pt-4"
                    >
                        Nuestra práctica se basa en una profunda comprensión de cómo el espacio influye en el comportamiento humano y el bienestar.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                        >
                            <div className="h-[1px] w-full bg-black/10 mb-6 group-hover:bg-black/40 transition-colors duration-500" />
                            <h3 className="text-2xl font-display text-[#1A1A1A] mb-4 group-hover:translate-x-2 transition-transform duration-300">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 font-light leading-relaxed text-sm pr-4">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default SpecializedServices;
