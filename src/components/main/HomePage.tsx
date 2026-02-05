"use client";

import React from "react";
import { Header } from "../layout/header/Header";
import Hero from "../layout/hero/Hero";
import Projects from "./Projects";
import Process from "./Process";
import Contact from "./Contact";
import Footer from "../layout/Footer";

export const HomePage = () => {
    return (
        <main className="relative w-full">
            <Header />
            <Hero />
            <Projects />
            <Process />
            <Contact />
            <Footer />
        </main>
    );
};
export default HomePage;
