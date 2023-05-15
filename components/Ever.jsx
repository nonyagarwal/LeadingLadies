import React from "react";
import { useRouter } from "next/router";

const Ever = (props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/forms");
  };
  const handleOnClick = () => {
    router.push("/form2");
  };
  const handleOClick = () => {
    router.push("/contact");
  };

  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay div */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/70 z-[2]" />
      <div className="absolute left-0 ml-3 p-5 text-black z-[2] mt-[8rem] mx-5 max-w-2xl min-[320px]:text-center max-[600px]:mt-50">
        <h1 className="text-6xl font-bold">{props.heading}</h1>
        <p className="py-5 text-2xl">{props.message}</p>
        <p className="py-5 text-xl">{props.para}</p>
        <button
          className="px-8 py-2 border-black font-semibold hover:scale-110"
          onClick={handleClick}
        >
          {" "}
          {props.button1}{" "}
        </button>
        <button
          className="px-8 py-2 border-black font-semibold hover:scale-110 "
          onClick={handleOnClick}
        >
          {props.button2}
        </button>
        <button
          className="px-8 py-2 border-black font-semibold hover:scale-110 "
          onClick={handleOClick}
        >
          {props.button3}
        </button>
      </div>
    </div>
  );
};

export default Ever;
