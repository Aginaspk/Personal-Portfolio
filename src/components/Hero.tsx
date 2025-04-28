import Spline from "@splinetool/react-spline";
import { Spotlight } from "./ui/Spotlite";
const Hero = () => {
  return (
    <>
      <div className="bg-black h-screen w-full relative">
        <div className="w-1/2 h-full">
          <Spotlight />
          <Spline scene="https://prod.spline.design/zx3bprrgBHxV1H4v/scene.splinecode" />{" "}
        </div>
        <div className="w-1/2"></div>
      </div>
    </>
  );
};

export default Hero;
