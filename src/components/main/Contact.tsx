"use client";

import React from "react";
import { motion } from "motion/react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const Contact = () => {
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
              Let's build <br/> the future.
            </motion.h2>

            <div className="space-y-8 text-gray-600 font-light">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Studio</h4>
                <p>123 Architecture Blvd,<br/>New York, NY 10012</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Contact</h4>
                <p>hello@arclab.com<br/>+1 (555) 123-4567</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Follow</h4>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-[#1A1A1A] transition-colors">Instagram</a>
                  <a href="#" className="hover:text-[#1A1A1A] transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-[#1A1A1A] transition-colors">Behance</a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3">
            <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-black transition-colors">Name</label>
                        <input type="text" className="w-full bg-transparent border-b border-black/20 py-3 focus:border-black outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="group">
                        <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-black transition-colors">Email</label>
                        <input type="email" className="w-full bg-transparent border-b border-black/20 py-3 focus:border-black outline-none transition-colors" placeholder="john@example.com" />
                    </div>
                </div>

                <div className="group">
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-black transition-colors">Project Type</label>
                    <select className="w-full bg-transparent border-b border-black/20 py-3 focus:border-black outline-none transition-colors appearance-none rounded-none">
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Interior Design</option>
                        <option>Other</option>
                    </select>
                </div>

                <div className="group">
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-black transition-colors">Message</label>
                    <textarea rows={4} className="w-full bg-transparent border-b border-black/20 py-3 focus:border-black outline-none transition-colors resize-none" placeholder="Tell us about your project..." />
                </div>

                <Button className="w-full md:w-auto mt-4">
                    Send Request
                </Button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
