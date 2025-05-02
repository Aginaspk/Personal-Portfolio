import { Globe } from "./magicui/globe";
const MyDisplay = () => {
  return (
    <div className="w-full h-[120vh] grid gap-5 mb-10">
      <div className="div1 w-full rounded-lg [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"></div>
      <div className="div2 w-full rounded-lg [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] relative overflow-hidden">
        <div className="absolute -bottom-44      w-[1200px] -left-24 ">
          <Globe className="" />
        </div>
      </div>
      <div className="div3 w-full rounded-lg [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"></div>
      <div className="div4 w-full rounded-lg [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"></div>
      <div className="div5 w-full rounded-lg [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"></div>
    </div>
  );
};

export default MyDisplay;
