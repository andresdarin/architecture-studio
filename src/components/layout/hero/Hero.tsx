"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "@/components/ui/Container";

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#F5F5F5]">
            {/* Background Image with Parallax-like feel (simple scale) */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                <Image
                    src="/img/house-banner.jpg"
                    alt="Modern Architecture"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
            </motion.div>

            {/* Blueprint Overlay */}
            <div className="absolute inset-0 z-[1] opacity-30 bg-blueprint pointer-events-none mix-blend-multiply" />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#F5F5F5] via-transparent to-transparent opacity-80" />

            {/* Content */}
            <Container className="relative z-10 h-full flex flex-col justify-start pt-32 md:pt-48 lg:pt-56">
                <div className="max-w-4xl space-y-6 ml-auto text-right">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 border border-black/20 rounded-full text-xs font-medium uppercase tracking-widest bg-white/50 backdrop-blur-sm mb-4">
                            Est. 2024 • International
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >
                        ¿Espacios sin vida? <br />
                        <span className="italic font-light opacity-90">Diseñamos Transformaciones.</span>
                    </motion.h1>

                    <motion.div
                        className="flex flex-col md:flex-row gap-6 items-center justify-end pt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <p className="text-white font-light leading-relaxed max-w-sm text-right order-2 md:order-1 drop-shadow-md">
                            Más allá de la estética. Creamos atmósferas que elevan la calidad de vida y la eficiencia.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#1A1A1A] text-white px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-black transition-colors order-1 md:order-2"
                        >
                            Inicia tu Transformación
                        </motion.button>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-6 md:left-12 lg:left-20 flex items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    <div className="w-12 h-[1px] bg-black/30" />
                    <span className="text-xs uppercase tracking-widest opacity-60">Scroll to explore</span>
                </motion.div>
            </Container>
        </section>
    );
}

export default Hero;
