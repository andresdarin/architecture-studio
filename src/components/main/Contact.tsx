"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

// Internal Custom Select Component for "Formulario de Diseño" aesthetic
const CustomSelect = ({
  label,
  options,
  value,
  onChange,
  id
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
  id: string
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Close when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="group relative" ref={containerRef}>
      <div
        className="w-full bg-transparent border-b border-black/20 py-4 cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`${value ? "text-black" : "text-transparent"} font-light`}>
          {value || "Placeholder"}
        </span>
        <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          {/* Minimalist Chevron */}
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" className="text-black/60"><path d="M1 1L5 5L9 1" strokeWidth="1" /></svg>
        </div>
      </div>

      <label
        htmlFor={id}
        className={`absolute left-0 transition-all duration-300 cursor-text uppercase tracking-widest text-gray-400
          ${value || isOpen ? "-top-3 text-xs text-black" : "top-4 text-base"}
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
      </label>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-full mt-2 bg-white shadow-xl z-50 py-2"
          >
            {options.map((option) => (
              <div
                key={option}
                className="px-6 py-3 text-sm font-light text-gray-600 hover:bg-[#fafafa] hover:text-black cursor-pointer transition-colors"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Contact = () => {
  const [projectType, setProjectType] = React.useState("");
  const [budget, setBudget] = React.useState("");

  return (
    <Section id="contact" className="bg-[#F5F5F5] py-24 md:py-40">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          {/* Info */}
          <div className="lg:w-1/3">
            <motion.h2
              className="text-display text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Agenda tu <br /> Consultoría.
            </motion.h2>

            <div className="space-y-8 text-gray-600 font-light">
              <p className="text-lg leading-relaxed">
                Cada proyecto comienza con una conversación. Cuéntanos tu visión y analicemos la viabilidad juntos.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Estudio</h4>
                  <address className="not-italic text-lg text-[#1A1A1A] font-light leading-relaxed">
                    Av. Arquitectura 123,<br />
                    Oficina 4B, Diseño District
                  </address>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Contacto Directo</h4>
                  <div className="flex flex-col items-start gap-2">
                    <a
                      href="mailto:administracion@arcstudio.com"
                      className="text-lg text-[#1A1A1A] font-light hover:opacity-60 transition-opacity flex items-center gap-2 group"
                    >
                      <span className="border-b border-transparent group-hover:border-black/20 transition-colors">
                        administracion@arcstudio.com
                      </span>
                    </a>
                    <a
                      href="tel:+59898123456"
                      className="text-lg text-[#1A1A1A] font-light hover:opacity-60 transition-opacity flex items-center gap-2 group"
                    >
                      <span className="border-b border-transparent group-hover:border-black/20 transition-colors">
                        (+598) 98 123 456
                      </span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3">
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="group relative">
                  <input type="text" className="peer w-full bg-transparent border-b border-black/20 py-4 focus:border-black outline-none transition-colors placeholder-transparent" placeholder="Nombre" id="name" />
                  <label htmlFor="name" className="absolute left-0 -top-3 text-xs uppercase tracking-widest text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs peer-focus:text-black transition-all">Nombre Completo</label>
                </div>
                <div className="group relative">
                  <input type="email" className="peer w-full bg-transparent border-b border-black/20 py-4 focus:border-black outline-none transition-colors placeholder-transparent" placeholder="Email" id="email" />
                  <label htmlFor="email" className="absolute left-0 -top-3 text-xs uppercase tracking-widest text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs peer-focus:text-black transition-all">Email Corporativo</label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <CustomSelect
                  id="type"
                  label="Tipo de Proyecto"
                  value={projectType}
                  onChange={setProjectType}
                  options={["Residencial de Lujo", "Desarrollo Comercial", "Reforma Integral", "Consultoría de Diseño"]}
                />

                <CustomSelect
                  id="budget"
                  label="Presupuesto Estimado"
                  value={budget}
                  onChange={setBudget}
                  options={["$50k - $150k", "$150k - $500k", "$500k - $1M", "$1M +"]}
                />
              </div>

              <div className="group relative">
                <textarea rows={2} className="peer w-full bg-transparent border-b border-black/20 py-4 focus:border-black outline-none transition-colors resize-none placeholder-transparent" placeholder="Mensaje" id="message" />
                <label htmlFor="message" className="absolute left-0 -top-3 text-xs uppercase tracking-widest text-gray-400 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-xs peer-focus:text-black transition-all">Detalles del Proyecto</label>
              </div>

              <div className="pt-8 text-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto bg-[#1A1A1A] text-white px-12 py-5 text-xs uppercase tracking-widest font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl"
                >
                  Iniciar Conversación
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
