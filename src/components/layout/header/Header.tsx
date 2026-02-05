"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-[#F5F5F5]/80 backdrop-blur-md border-b border-black/5 py-4"
          : "bg-transparent py-6"
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="z-50 group relative">
          <div className="flex flex-col">
            <span className={cn(
              "font-bold text-xl tracking-tighter uppercase transition-colors duration-500",
              isScrolled || isMobileMenuOpen ? "text-[#1A1A1A]" : "text-white"
            )}>
              ARC Studio
            </span>
            <span className={cn(
              "text-[10px] tracking-[0.2em] uppercase opacity-60 transition-colors duration-500",
              isScrolled || isMobileMenuOpen ? "text-[#1A1A1A]" : "text-white"
            )}>Architecture</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-medium uppercase tracking-wide hover:opacity-60 transition-all duration-500",
                isScrolled ? "text-[#1A1A1A]" : "text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "ml-4 transition-colors duration-500",
              isScrolled ? "border-black/10 text-black hover:bg-black hover:text-white" : "border-white/20 text-white hover:bg-white hover:text-black"
            )}
            onClick={() => window.location.href = '#contact'}
          >
            Contact
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden z-50 p-2 -mr-2 transition-colors duration-500",
            isScrolled || isMobileMenuOpen ? "text-[#1A1A1A]" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-full h-[1.5px] bg-current origin-center transition-transform"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-full h-[1.5px] bg-current transition-opacity"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
              className="w-full h-[1.5px] bg-current origin-center transition-transform"
            />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 bg-[#F5F5F5] z-40 flex flex-col items-center justify-center md:hidden"
            >
              <nav className="flex flex-col items-center gap-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="text-2xl font-light text-display uppercase tracking-wider text-[#1A1A1A]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.location.href = '#contact';
                    }}
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.header>
  );
};
