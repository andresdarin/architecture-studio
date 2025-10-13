import Image from "next/image";
import { Header } from "../header/Header";
import HeroBg from '@/../public/img/house-banner.jpg';
import Brand from "@/components/ui/Brand";

const Hero = () => {
    return (
        <div className="h-screen w-full relative overflow-hidden">
            {/* Header */}
            <div className="absolute top-0 left-0 w-full z-10">
                <Header />
            </div>

            {/* Brand posicionado específicamente */}
            <div className="absolute top-1/4 right-8 md:right-80 z-10">
                <Brand size={"medium"} />
            </div>

            <Image
                src={HeroBg}
                alt="Description of the image"
                layout="responsive"
                width={700}
                height={475}
                className="absolute inset-0 -z-10"
            />
        </div>
    );
}

export default Hero;