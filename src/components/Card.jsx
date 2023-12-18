import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { LuDot } from "react-icons/lu";
import { motion } from "framer-motion";

const Card = ({ data, referance }) => {
  return (
    <motion.div
      drag
      dragConstraints={referance}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.2}
      className=" relative w-60 h-72 flex-shrink-0 overflow-hidden rounded-[45px] bg-zinc-900/90 text-white py-10 px-8"
    >
      <FaRegFileAlt />
      <p className=" text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className=" footer absolute bottom-0 w-full  left-0">
        <div className=" flex items-center justify-between py-3 px-8 mb-5">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <LuDot /> : <LuDownload size=".7em" color="#fff" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor == "green" ? "bg-green-600" : "bg-blue-600"
            } flex items-center justify-center`}
          >
            <h3 className=" text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
