"use client";

import React from "react";
import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const steps = [
    {
        number: "01",
        title: "Concepto & Análisis",
        description: "Comenzamos analizando el sitio, el entorno y las necesidades de los habitantes. Cada proyecto inicia con una comprensión profunda del contexto.",
    },
    {
        number: "02",
        title: "Diseño Técnico",
        description: "Las ideas se traducen en precisión. Elaboramos planos detallados, enfocados en la integridad estructural, la sostenibilidad y la armonía estética.",
    },
    {
        number: "03",
        title: "Construcción",
        description: "Supervisamos la realización de la visión. Desde la primera piedra hasta el detalle final, aseguramos que la realidad construida coincida con la intención del diseño.",
    },
    {
        number: "04",
        title: "Entrega",
        description: "Detallado final y entrega, asegurando que la realidad construida supere la visión inicial.",
    },
];

const Process = () => {
    return (
        <Section id="studio" className="bg-blueprint-dark relative text-white overflow-hidden py-24 md:py-32">
            {/* Decorative Technical Lines */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <svg className="w-full h-full opacity-10">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    <motion.line
                        x1="0" y1="20%" x2="100%" y2="20%"
                        stroke="white" strokeWidth="1" strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                    />
                    <motion.line
                        x1="20%" y1="0" x2="20%" y2="100%"
                        stroke="white" strokeWidth="1" strokeDasharray="5,5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.5 }}
                    />
                    <motion.circle
                        cx="80%" cy="30%" r="150"
                        stroke="white" strokeWidth="1" fill="none"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                    />
                </svg>
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Column: Title */}
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="sticky top-24"
                        >
                            <span className="block text-xs font-mono text-gray-400 mb-4 tracking-widest uppercase">
                        // El Método
                            </span>
                            <h2 className="text-display text-4xl md:text-6xl text-white mb-6 leading-none">
                                Precisión <br /> y Flujo
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                                Un enfoque estructurado que garantiza la excelencia desde el primer boceto hasta la piedra final.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column: Steps */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="group relative pl-8 border-l border-white/10 hover:border-white/40 transition-colors duration-500"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                            >
                                {/* Active Indicator Line */}
                                <motion.div
                                    className="absolute left-[-1px] top-0 h-0 w-[2px] bg-white group-hover:h-full transition-all duration-500 ease-out"
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "40%" }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + (index * 0.2), duration: 0.5 }}
                                />

                                <span className="block text-5xl md:text-6xl text-white/10 font-display font-medium absolute -top-6 left-4 z-0 pointer-events-none group-hover:text-white/20 transition-colors duration-500">
                                    {step.number}
                                </span>

                                <div className="relative z-10 pt-6">
                                    <h3 className="text-xl text-white font-medium tracking-wide mb-3 uppercase">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-400 font-light leading-relaxed text-sm">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Process;
