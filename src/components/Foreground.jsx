import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "This is the background color of the card that eill be displayed",
      filesize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Lots of Money",
        tagColor: "blue",
      },
    },
    {
      desc: "This is the background color of the card that eill be displayed",
      filesize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "coming your way",
        tagColor: "green",
      },
    },
    {
      desc: "This is the background color of the card that eill be displayed",
      filesize: ".9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Uday Singh🤑🤑",
        tagColor: "blue",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className=" fixed z-[3] w-full h-full top-0 left-0 flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card data={item} referance={ref} />
      ))}
    </div>
  );
};

export default Foreground;
