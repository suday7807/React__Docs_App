import React from "react";

const Background = () => {
  return (
    <div className="fixed z-[2] w-full h-full">
      <div className=" absolute top-[5%] w-full py-10 flex justify-center font-semibold text-zinc-600 text-xl ">
        Documents
      </div>
      <h1 className=" absolute top-1/2 left-1/2 tracking-tighter font-semibold text-zinc-900 leading-none -translate-x-[50%] -translate-y-[50%] text-[13vw]">
        Docs.
      </h1>
    </div>
  );
};

export default Background;
