import React from "react";
import Container from "@/components/ui/Container";

const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-white pt-24 pb-12 border-t border-white/10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-24">
                    {/* Col 1: Brand */}
                    <div className="flex flex-col space-y-6">
                        <div className="flex flex-col">
                            <span className="font-bold text-2xl tracking-tighter uppercase mb-1">ARC Studio</span>
                            <span className="text-[10px] tracking-[0.3em] uppercase opacity-40">Architecture Studio</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed font-light">
                            Creamos espacios que trascienden lo funcional para convertirse en experiencias emocionales y atmósferas vivas.
                        </p>
                    </div>

                    {/* Col 2: Explore */}
                    <div className="flex flex-col space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2">Explora</h4>
                        <ul className="space-y-4 text-sm text-gray-400 font-light">
                            <li><a href="#" className="hover:text-white transition-colors">Proyectos Selectos</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">El Estudio</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Servicios Especializados</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Noticias & Prensa</a></li>
                        </ul>
                    </div>

                    {/* Col 3: Legal */}
                    <div className="flex flex-col space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2">Corporativo</h4>
                        <ul className="space-y-4 text-sm text-gray-400 font-light">
                            <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Términos de Uso</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Carreras</a></li>
                        </ul>
                    </div>

                    {/* Col 4: Contact */}
                    <div className="flex flex-col space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-2">Contacto</h4>
                        <address className="not-italic text-sm text-gray-400 font-light space-y-4">
                            <p>Av. Arquitectura 123,<br />Oficina 4B, Diseño District</p>
                            <p><a href="mailto:administracion@arcstudio.com" className="hover:text-white transition-colors">administracion@arcstudio.com</a></p>
                            <div className="flex gap-4 pt-2">
                                <a href="#" className="hover:text-white transition-colors uppercase text-xs tracking-wider">Ig</a>
                                <a href="#" className="hover:text-white transition-colors uppercase text-xs tracking-wider">Li</a>
                                <a href="#" className="hover:text-white transition-colors uppercase text-xs tracking-wider">Be</a>
                            </div>
                        </address>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-gray-600 uppercase tracking-widest">
                    <span>© {new Date().getFullYear()} ARC Studio Architecture. Desarrollado por <a href="https://weblabsoftware.com" className="hover:text-white transition-colors">Weblab Studio</a></span>
                    <span className="mt-2 md:mt-0">Todos los derechos reservados.</span>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
