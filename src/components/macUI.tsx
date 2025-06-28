const MacUI = () => {
  return (
    <>
      <div className="group absolute bottom-0 z-20 h-50 w-64 overflow-hidden rounded-t-md border border-b-0 border-neutral-800 transition-all duration-300 hover:-bottom-4">
        <div className="relative z-30 flex h-3 w-full items-center justify-start gap-x-1 bg-neutral-800 px-2">
          <div className="size-1.5 rounded-full bg-red-500"></div>
          <div className="size-1.5 rounded-full bg-slate-300"></div>
          <div className="size-1.5 rounded-full bg-green-500"></div>
        </div>
        <div
          aria-hidden="true"
          className="relative flex h-full flex-1 flex-col items-center bg-[#000319]/90"
        >
          <div className="mt-4 flex h-4 w-[6rem] items-center justify-end rounded-full bg-neutral-600 px-1 transition-all duration-300 group-hover:w-[8rem] group-hover:bg-neutral-800">
            <div className="h-2 w-2 rounded-full bg-neutral-900 transition-all duration-300"></div>
          </div>
          <div className="mt-4">
            <p className="relative z-20 bg-gradient-to-b from-slate-100 to-slate-400 bg-clip-text text-center text-base font-bold text-transparent">
              Websites that stand out <br />
              and make a difference
            </p>
            <div className="mt-4 flex justify-center gap-x-2">
              <button className="w-14 rounded-sm bg-gradient-to-br from-purple-500 to-indigo-600 py-1 text-[6px] text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-indigo-700">
                Get started
              </button>
              <button className="w-14 rounded-sm border border-slate-600 py-1 text-[6px] text-white hover:border-slate-200">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MacUI;