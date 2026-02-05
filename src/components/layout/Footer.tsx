import React from "react";
import Container from "@/components/ui/Container";

const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-white py-12 border-t border-white/10">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col">
                        <span className="font-bold text-lg tracking-tighter uppercase">ARC.Lab</span>
                        <span className="text-[10px] tracking-[0.2em] uppercase opacity-40">Architecture Studio</span>
                    </div>

                    <div className="text-xs text-gray-500 uppercase tracking-wider">
                        © {new Date().getFullYear()} ARC.Lab. All rights reserved.
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
