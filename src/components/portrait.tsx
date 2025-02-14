"use client"; // Needed for Next.js App Router

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const PortraitFrame = ({ src, className }: {src: string, className: string}) => {
  const [isSwinging, setIsSwinging] = useState(false);

  const startSwing = () => {
    setIsSwinging(false); // Reset animation
    setTimeout(() => setIsSwinging(true), 10); // Restart animation
  };

  return (
    <div className={cn("absolute", className)}>

    <div className="relative flex justify-center">
      {/* Nail (Anchor Point) */}
      <div className="absolute top-0 w-2 h-2 bg-gray-700 rounded-full shadow-md z-10"></div>

      {/* Swinging Frame */}
      <motion.div
        className="shadow-lg w-fit origin-top"
        style={{ transformOrigin: "top center" }}
        drag
        dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}
        onHoverStart={startSwing} // Restart swing on hover
        animate={
          isSwinging
            ? {
                rotate: [0, -3, 3, -3, 0],
                transition: {
                  duration: 3,
                  ease: "easeInOut",
                },
              }
            : {}
        }
      >
        <div
          className="border-[18px] border-white relative w-fit bg-white"
          style={{ boxShadow: "inset 0px 0px 5px 3px rgba(0,0,0,0.75)" }}
        >
          <Image
            src={src}
            alt="portrait"
            width={130}
            height={100}
            className="object-cover rounded-lg m-5 border-[3px] border-white"
          />
        </div>
      </motion.div>
    </div>
    </div>

  );
};

export default PortraitFrame;
