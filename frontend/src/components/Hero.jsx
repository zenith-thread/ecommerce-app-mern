// assets
import { assets } from "../assets/frontend_assets/assets";

const { hero_img } = assets;

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      {/* Hero Left side */}
      <section className="w-full sm:w-1/2 h-[30vh] sm:h-auto flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          </div>
        </div>
      </section>

      {/* Hero Right Side */}
      <img src={hero_img} alt="hero image" className="w-full sm:w-1/2" />
    </div>
  );
};

export default Hero;
