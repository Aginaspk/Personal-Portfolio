import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <div className="flex size-full flex-col items-center justify-center bg-cover bg-center">
      <div
        className="absolute top-0 h-[150px] w-full overflow-hidden"
        style={{
          maskImage: "linear-gradient(rgb(0, 0, 0) 40%, rgba(0, 0, 0, 0) 100%)",
          opacity: .4,
        }}
      >
        <Image
          src={"/crumpled-paper.avif"}
          fill
          alt="papper"
          className="object-cover"
        />
      </div>

      <div className="relative">
        <div className="w-[350px] h-[120px]">
          <Image
            aria-hidden="true"
            draggable="false"
            alt="wings"
            src="/wings.svg"
            width={350}
            height={100}
            className="select-none opacity-100 h-full w-full"
          />
        </div>

        <div className="absolute top-1/2 left-[51%] z-50 w-12 -translate-x-1/2 -translate-y-1/2 md:w-12">
          <Image
            src={
              "https://res.cloudinary.com/dup1lh7xk/image/upload/v1746008798/image_s67ree.png"
            }
            alt="logo"
            height={40}
            width={40}
            className=""
          />
        </div>
      </div>

      <span
        className="relative text-[rgb(255,255,255,90%)] w-full -translate-y-4 py-2 text-center text-3xl font-bold text-balance"
        style={
          {
            maskImage:
              "linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%))",
          } as React.CSSProperties
        }
      >
        Let&apos;s work together on your next project
      </span>

      <div className="relative flex">
        <button
          type="button"
          className="items-center gap-2 py-3 text-base font-light text-white/75 outline-hidden transition-all duration-500 cursor-pointer hover:text-white/90 flex w-full justify-center rounded-md bg-white/5 hover:bg-white/10 px-8 shadow-[inset_0_3px_10px_#ffffff3f]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-copy"
            aria-hidden="true"
          >
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
          </svg>
          aginaspk6@gmail.com
        </button>
      </div>
    </div>
  );
};

export default Logo;
