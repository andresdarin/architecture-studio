"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const faqs = [
    {
        question: "¿Cuál es el tiempo típico de un proyecto?",
        answer: "Los plazos varían según la complejidad. Una renovación residencial típica toma de 6 a 9 meses, mientras que las obras nuevas pueden oscilar entre 12 y 24 meses desde el concepto hasta la finalización."
    },
    {
        question: "¿Se encargan de la fase de construcción?",
        answer: "Sí, ofrecemos servicios completos de gestión de proyectos. Trabajamos estrechamente con contratistas de confianza para asegurar que la intención del diseño se ejecute impecablemente."
    },
    {
        question: "¿Cómo se estructuran sus honorarios?",
        answer: "Trabajamos sobre una base porcentual o tarifa fija dependiendo del alcance del proyecto. Ofrecemos transparencia en cada etapa para asegurar la alineación con su presupuesto."
    },
    {
        question: "¿Qué regiones atienden?",
        answer: "Tenemos base en la ciudad pero trabajamos en proyectos internacionalmente. Nuestro proceso de diseño remoto está refinado para asegurar una colaboración fluida sin importar la ubicación."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <Section className="bg-white py-24 md:py-32 border-t border-black/5">
            <Container>
                <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                    <div className="md:w-1/3">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-display text-4xl md:text-5xl text-[#1A1A1A] mb-6"
                        >
                            Preguntas <br /> Frecuentes
                        </motion.h2>
                        <p className="text-gray-500 font-light text-sm max-w-xs">
                            La claridad es la base de la confianza. Aquí respondemos lo que nuestros clientes suelen preguntar.
                        </p>
                    </div>

                    <div className="md:w-2/3">
                        <div className="border-t border-black/10">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border-b border-black/10">
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full py-8 flex justify-between items-center text-left group"
                                    >
                                        <span className="text-lg md:text-xl font-medium text-[#1A1A1A]">
                                            {faq.question}
                                        </span>
                                        <span className={`text-2xl font-light transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                                            +
                                        </span>
                                    </button>
                                    <AnimatePresence>
                                        {openIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pb-8 pr-8 text-gray-600 font-light leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default FAQ;
