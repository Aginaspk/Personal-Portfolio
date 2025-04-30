import { LuArrowRight, LuCopy } from "react-icons/lu";

const ConnectButton = () => {
  return (
    <div className="flex justify-between md:gap-16 gap-7 mt-5 md:flex-row flex-col">
      <div className="group relative font-outfit inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/10 py-[3px] pr-[3px] pl-2 text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3">
        <span className="z-10 px-3 text-white transition-colors duration-300 group-hover:text-black">
          Let's Connect
        </span>
        <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-[#DCDAC8] p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5">
          <LuArrowRight className="text-black group-hover:translate-x-6 transition-all duration-200" />
        </span>
        <span className="absolute flex items-center justify-center inset-0 bg-[#DCDAC8] scale-0 translate-x-[45%] group-hover:translate-x-0 group-hover:scale-100 transition-all duration-500 rounded-full">
          <LuArrowRight className="text-black group-hover:translate-x-16 transition-all duration-500" />
        </span>
      </div>
      <div className="inset-0 flex justify-center items-center">
        <h1 className="font-outfit flex gap-2 items-center"><LuCopy className="text-[20px]"/><span>aginaspk6@gmail.com</span></h1>
      </div>
    </div>
  );
};

export default ConnectButton;
