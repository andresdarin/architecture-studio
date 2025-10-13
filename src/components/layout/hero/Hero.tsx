import Image from "next/image";
import { Header } from "../header/Header";
import HeroBg from '@/../public/img/house-banner.jpg';
import Brand from "@/components/ui/Brand";


const Hero = () => {
    return (
        <div className="">
            <Header />
            <Image
                src={HeroBg}
                alt="Description of the image"
                layout="responsive"
                width={700}
                height={475}
                className="absolute inset-0 -z-10"
            />
            <Brand />
        </div>
    );
}

export default Hero;

