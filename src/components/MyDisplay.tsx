import { LuArrowRight, LuMapPin } from "react-icons/lu";
import { Globe } from "./magicui/globe";
import { ITSkillsMarquee } from "./iTSkillsMarquee";
import { Ripple } from "./magicui/ripple";
import MacUI from "./macUI";
import Logo from "./display/logo";
import Technology from "./display/technology";
import { ArrowRight, Code } from "lucide-react";

const MyDisplay = () => {
  return (
    <div className="mx-auto md:px-5 grid w-full auto-rows-auto md:auto-rows-[19rem] grid-cols-6 gap-4 md:max-w-full my-20">
      <div className="col-span-6 md:col-span-3 lg:col-span-4 w-full min-h-[21rem] md:min-h-0 rounded-lg [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"></div>

      <div className="group col-span-6 md:col-span-3 lg:col-span-2 md:row-span-2 w-full min-h-[25rem] md:min-h-0 rounded-lg [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] relative overflow-hidden z-50">
        <h1 className="mt-4 w-full bg-linear-to-b from-[#edeffd] to-[#7b9cda] bg-clip-text text-center text-xl md:text-2xl leading-[100%] font-bold tracking-tighter text-balance text-transparent select-none md:mt-12 absolute z-100 px-4">
          I&apos;m available for communication
          <br /> regardless of the time zone
        </h1>
        <div className="absolute -bottom-[270px] md:-bottom-44 w-[800px] md:w-[1200px] -left-[140px] md:-left-24">
          <Globe className="" />
        </div>
        <div className="pointer-events-none z-30 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10 absolute bottom-0 w-full">
          <LuMapPin
            size={48}
            className="text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 mb-1"
          />
          <h1 className="max-w-lg text-neutral-400 font-outfit">Remote</h1>
          <h1 className="text-xl font-semibold text-neutral-300 font-outfit">
            India -{" "}
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })}
          </h1>
        </div>
        <div className="pointer-events-none inset-0 linear absolute bottom-0 z-20"></div>
        <div className="absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-50 font-outfit">
          <h4 className="text-neutral-300 flex items-center gap-2 font-bold cursor-pointer">
            Connect now{" "}
            <span className="pt-[2px]">
              <LuArrowRight />
            </span>
          </h4>
        </div>
      </div>

      {/* Skills card */}
      <div className="col-span-6 md:col-span-3 lg:col-span-2 md:row-span-2 w-full h-auto md:h-full min-h-[30rem] md:min-h-0 rounded-lg [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] relative overflow-visible flex flex-col justify-between">
        <h1 className="w-full bg-linear-to-b from-[#fd81e298] to-[#da7bda] bg-clip-text px-4 text-center text-xl md:text-2xl leading-[100%] font-bold tracking-tighter text-transparent select-none dark:from-[#edeffd] mt-8 md:mt-12">
          Dedicated to continuous learning
          <br /> in the fast-evolving tech world.
        </h1>
        <div className="w-full top-0 left-0 overflow-visible">
          <ITSkillsMarquee />
        </div>
        <div className="relative flex h-[300px] md:h-[500px] w-full flex-col items-center justify-center overflow-hidden bg-transparent">
          <MacUI />
          <Ripple />
        </div>
      </div>

      {/* Bottom cards */}
      <div className=" col-span-6 md:col-span-3 lg:col-span-2 w-full min-h-[21rem] md:min-h-0 rounded-lg [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] relative">
        <Logo />
      </div>
      {/* last */}
      <div className="group col-span-6 md:col-span-6 lg:col-span-4 w-full min-h-[21rem] md:min-h-0 rounded-lg [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] relative overflow-hidden">
        <div>
          <Technology />
        </div>
        <div className="pointer-events-none z-30 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10 absolute bottom-0 w-full">
          <Code
            size={40}
            className="text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 mb-1"
          />
          <h1 className="max-w-lg text-neutral-400 font-outfit">Tech Stack</h1>
          
        </div>
        <div className="absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-50 font-outfit">
          <h4 className="text-neutral-300 flex items-center gap-2 font-bold cursor-pointer">
            Explore Stack{" "}
            <span className="pt-[2px]">
              <ArrowRight />
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default MyDisplay;
