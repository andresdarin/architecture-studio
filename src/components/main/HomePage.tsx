import { Header } from "../layout/header/Header";

export const HomePage = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-background">
                <nav className="container-custom py-6">
                    <div className="flex justify-between items-center">
                        <div className="text-display text-2xl font-semibold">
                            Architecture Studio
                        </div>
                        <div className="flex gap-8">
                            <a href="#projects" className="nav-link">Proyectos</a>
                            <a href="#about" className="nav-link">Nosotros</a>
                            <a href="#services" className="nav-link">Servicios</a>
                            <a href="#contact" className="nav-link">Contacto</a>
                        </div>
                    </div>
                </nav>

                {/* Contenido de prueba */}
                <div className="container-custom py-20">
                    <h1 className="text-display text-6xl text-foreground">
                        Arquitectura Moderna
                    </h1>
                    <p className="text-foreground-secondary text-xl mt-6 max-w-2xl">
                        Creamos espacios que inspiran y transforman la manera de vivir.
                    </p>
                    <button className="btn-primary mt-8">
                        Ver Proyectos
                    </button>
                </div>
            </div>
        </>
    );
};
export default HomePage;