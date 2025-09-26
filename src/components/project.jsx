import { useState } from "react";

export default function ProjectPic({ src, className = "" ,header="שם הפרוייקט", description="תיאור קצר"}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      className={`w-full h-full relative rounded-lg  ${className} shadow-sm} cursor-pointer`}
        onClick={handleClick}
    >
      <img
        src="\logos\circle-check-big.svg"
        className="w-full h-full object-cover"
        alt="project"
       />
      <div className={`absolute inset-0 flex flex-col justify-end  p-4 rounded-lg
        transition-all ease-in-out duration-1000
        ${isClicked ? "bg-transparent" :  "bg-gradient-to-t from-black/10 to-transparent"}
      `}
      >
        <h3 dir="rtl" className="text-lg font-bold mt-2 text-red-300" >
            {header}
        </h3>
        <p
          dir="rtl"
          className={`text-sm text-red-600 transition-all ease-in-out duration-1000
                ${
                  isClicked
                    ? "max-h-20 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
