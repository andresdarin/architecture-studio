"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

const projects = [
  {
    id: 1,
    title: "Casa Horizon",
    category: "Residential",
    year: "2023",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    height: "h-[400px] md:h-[500px]",
  },
  {
    id: 2,
    title: "The Concrete Loft",
    category: "Interior",
    year: "2022",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
    height: "h-[300px] md:h-[400px]",
  },
  {
    id: 3,
    title: "Museum of Light",
    category: "Public",
    year: "2024",
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
    height: "h-[350px] md:h-[600px]",
  },
  {
    id: 4,
    title: "Forest Retreat",
    category: "Residential",
    year: "2023",
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    height: "h-[300px] md:h-[450px]",
  },
  {
    id: 5,
    title: "Azure Villa",
    category: "Residential",
    year: "2022",
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
    height: "h-[400px] md:h-[550px]",
  },
  {
    id: 6,
    title: "Urban Studio",
    category: "Commercial",
    year: "2023",
    src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800",
    height: "h-[350px] md:h-[400px]",
  },
];

const Projects = () => {
  return (
    <Section id="projects" className="bg-[#F5F5F5] relative">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-display text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-4">
                    Selected Works
                </h2>
                <div className="h-1 w-20 bg-[#1A1A1A]" />
            </motion.div>

            <motion.p
                className="max-w-md text-gray-600 mt-6 md:mt-0 text-right md:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                A collection of spaces designed with precision, light, and materiality.
            </motion.p>
        </div>

        {/* Masonry Grid Layout using columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="break-inside-avoid relative group overflow-hidden cursor-pointer"
            >
              <div className={`relative w-full ${project.height} overflow-hidden bg-gray-200`}>
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="block text-xs font-medium tracking-widest text-white/80 uppercase mb-2">
                            {project.category} • {project.year}
                        </span>
                        <h3 className="text-display text-3xl text-white">
                            {project.title}
                        </h3>
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] uppercase tracking-widest text-xs font-bold hover:bg-[#1A1A1A] hover:text-white transition-colors"
            >
                View All Projects
            </motion.button>
        </div>
      </Container>
    </Section>
  );
};

export default Projects;
