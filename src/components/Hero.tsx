import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlite";
import ShinyText from "./ui/ShinyText";
import { LuChevronRight } from "react-icons/lu";
import { Jim_Nightshade } from "next/font/google";
import ConnectButton from "./ui/ConnectButton";
import { Vortex } from "./ui/Vortex";

const nightShade = Jim_Nightshade({
  weight: "400",
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <>
      <div className="pb-20 pt-36">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vw]"
            fill="purple"
          />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-[#000319]">
          <div
            className={cn(
              "absolute inset-0",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,rgba(228,228,231,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.4)_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.4)_1px,transparent_1px)]"
            )}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-[#000319]" />
        </div>
        <div className="flex justify-center text-white relative h-screen">
          <div className="max-w-[89vw] flex flex-col items-center">
            <div>
              <button className="group flex cursor-pointer items-center rounded-full border text-sm text-white backdrop-blur-xs transition-transform duration-300 ease-in lg:text-base border-white/10 bg-white/5 hover:border-white/20 animate-slight-down">
                <span className="mx-1 rounded-full bg-blue-700 px-1.5 text-xs leading-relaxed font-outfit">
                  New
                </span>
                <ShinyText
                  text={`Letterboxd Now is Live`}
                  disabled={false}
                  speed={3}
                  className="font-outfit px-1 py-0.5 hover:text-neutral-400 hover:duration-300 "
                />
                <LuChevronRight
                  size={18}
                  className="mr-1 size-4 text-[#b5b5b5a4] transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 hover:duration-300"
                />
              </button>
            </div>
            <div className="text-center z-50 animate-slight-up">
              <h1 className="font-outfit my-2 w-full py-px text-center text-4xl leading-snug! font-semibold text-balance opacity-90 md:text-5xl lg:text-6xl text-white">
                I help founders convert <br className="md:hidden" /> ideas
                <br className="hidden" /> into engaging
                <br className="md:hidden" />
                <span
                  className={`${nightShade.className} text-5xl md:text-[80px] pl-5 bg-linear-to-b from-zinc-700 via-zinc-200 to-zinc-50 bg-clip-text font-light tracking-wide text-transparent`}
                >
                  digital platforms.
                </span>
              </h1>
              <div className="flex md:flex-row flex-col items-center justify-center gap-3 py-7 text-[24px] font-outfit text-[#B4B4B4]">
                <div className="flex gap-3">
                  Hello,I'm Aginas Pk
                  <span className="w-20 h-10 rounded-4xl overflow-hidden object-cover">
                    <img
                      className="hover:rotate-10 hover:scale-110 transition-all duration-500"
                      src="https://imgix.ranker.com/list_img_v2/8131/3168131/original/3168131?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720"
                      alt=""
                    />
                  </span>
                </div>
                a Full Stack Developer
              </div>
            </div>
            <div className="animate-slight-up z-50">
              <ConnectButton />
            </div>
            <div className=" -z-0">
              <Vortex
                backgroundColor="transparent"
                className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
