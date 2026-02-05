"use client";

import React from "react";
import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Concept & Analysis",
    description: "We begin by analyzing the site, the environment, and the needs of the inhabitants. Every project starts with a deep understanding of context.",
  },
  {
    number: "02",
    title: "Technical Design",
    description: "Ideas are translated into precision. We draft detailed architectural plans, focusing on structural integrity, sustainability, and aesthetic harmony.",
  },
  {
    number: "03",
    title: "Construction",
    description: "We oversee the realization of the vision. From the first stone to the final detail, we ensure the built reality matches the design intent.",
  },
];

const Process = () => {
  return (
    <Section id="studio" className="bg-blueprint-dark relative text-white overflow-hidden">
      {/* Decorative Technical Lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg className="w-full h-full opacity-20">
            <motion.line
                x1="0" y1="20%" x2="100%" y2="20%"
                stroke="white" strokeWidth="1" strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
            />
            <motion.circle
                cx="50%" cy="50%" r="200"
                stroke="white" strokeWidth="1" fill="none"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
            />
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            {/* Left Column: Title */}
            <div className="md:w-1/3">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="block text-xs font-mono text-gray-400 mb-4 tracking-widest uppercase">
                        // Methodology
                    </span>
                    <h2 className="text-display text-4xl md:text-5xl text-white mb-6">
                        The <br/> Blueprint
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Architecture is not just about building; it's about structuring space and light to elevate the human experience.
                    </p>
                </motion.div>
            </div>

            {/* Right Column: Steps */}
            <div className="md:w-2/3 grid grid-cols-1 gap-12">
                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        className="group relative pl-8 border-l border-white/20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                    >
                        {/* Active Indicator Line */}
                        <motion.div
                            className="absolute left-[-1px] top-0 h-0 w-[2px] bg-white group-hover:h-full transition-all duration-500 ease-out"
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + (index * 0.2), duration: 0.5 }}
                        />

                        <span className="block text-6xl text-white/10 font-display font-bold absolute -top-4 left-4 z-0 pointer-events-none group-hover:text-white/20 transition-colors">
                            {step.number}
                        </span>

                        <div className="relative z-10">
                            <h3 className="text-xl text-white font-medium tracking-wide mb-3 uppercase">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 font-light leading-relaxed">
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
