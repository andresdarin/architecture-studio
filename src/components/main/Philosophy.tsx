"use client";

import React from "react";
import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const Philosophy = () => {
    return (
        <Section className="bg-[#2A2A2A] text-white py-24 md:py-36 relative overflow-hidden">
            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
            />

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-xs uppercase tracking-[0.3em] text-white/50 mb-8 block">
                            Nuestra Filosofía
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight md:leading-snug mb-10">
                            "Creemos que el verdadero lujo reside en la <span className="italic text-white/70">pureza de la forma</span>, la honestidad de los materiales y el diálogo silencioso entre la luz y el espacio."
                        </h2>
                        <div className="w-[1px] h-20 bg-white/20 mx-auto" />
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};

export default Philosophy;
