"use client";

import React from "react";
import { motion } from "motion/react";
import Container from "@/components/ui/Container";

import Image from "next/image";

const logos = [
    { name: "ArchDaily", src: "/logos/1.png" },
    { name: "Dezeen", src: "/logos/2.png" },
    { name: "DesignBoom", src: "/logos/3.png" },
    { name: "Architectural Digest", src: "/logos/4.png" },
    { name: "Dwell", src: "/logos/5.png" },
];

const SocialProof = () => {
    return (
        <div className="w-full border-b border-white/10 bg-[#1A1A1A]">
            <Container className="py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium whitespace-nowrap">
                        Publicado En
                    </span>
                    <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-8 w-full items-center">
                        {logos.map((logo, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 0.5 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 1 }}
                                className="relative h-10 md:h-12 w-auto grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    height={48}
                                    width={160}
                                    className="h-full w-auto object-contain brightness-0 invert"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SocialProof;
