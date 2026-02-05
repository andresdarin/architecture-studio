"use client";

import React from "react";
import { Header } from "../layout/header/Header";
import Hero from "../layout/hero/Hero";
import SocialProof from "./SocialProof";
import SpecializedServices from "./SpecializedServices";
import Projects from "./Projects";
import Process from "./Process";
import Philosophy from "./Philosophy";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "../layout/Footer";

export const HomePage = () => {
    return (
        <main className="relative w-full">
            <Header />
            <Hero />
            <SpecializedServices />
            <SocialProof />
            <Projects />
            <Process />
            <Philosophy />
            <Testimonials />
            <FAQ />
            <Contact />
            <Footer />
        </main>
    );
};
export default HomePage;
