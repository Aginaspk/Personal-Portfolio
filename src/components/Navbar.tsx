import { LuCog } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="text-white w-[89vw] z-150 fixed top-7 flex items-center justify-between">
      <div className=" md:pt-[2px] pt-0">
        <img
          className="h-[20px]"
          src="https://res.cloudinary.com/dup1lh7xk/image/upload/v1746008798/image_s67ree.png"
          alt=""
        />
      </div>

      <div className=" hidden md:flex font-outfit list-none py-1 px-1.5 border border-white/10 bg-white/5 rounded-full gap-1">
        <li className="text-[14px] py-1.5 text-white/70 hover:text-white/85 px-4 rounded-full bg-white/10 font-outfit">
          Home
        </li>
        <li className="text-[14px] py-1.5 text-white/70 hover:text-white/85 px-4 rounded-full font-outfit">
          Work
        </li>
        <li className="text-[14px] py-1.5 text-white/70 hover:text-white/85 px-4 rounded-full font-outfit">
          About
        </li>
        <li className="text-[14px] py-1.5 text-white/70 hover:text-white/85 px-4 rounded-full font-outfit">
          More
        </li>
        <li className="text-[14px] py-1.5 text-white/70 hover:text-white/85 px-4 rounded-full font-outfit bg-white/25">
          Book a Call
        </li>
      </div>
      <div className="  pt-1">
      <LuCog size={22} className="float-right text-[#b4b4b4]"/>
      </div>
    </div>
  );
};

export default Navbar;
