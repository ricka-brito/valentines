"use client"

import Popup from "@/components/popup";
import PortraitFrame from "@/components/portrait";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-full bg-gradient-to-t from-pink-400 to-purple-500 flex items-center justify-center">
      <PortraitFrame src="/cats/gato1.png" className={"top-10 left-72 rotate-12"}/>
      <PortraitFrame src="/cats/gato2.jpeg" className={"top-14 right-20 -rotate-6"}/>
      <PortraitFrame src="/cats/gato3.png" className={"bottom-32 left-6 -rotate-[20deg]"}/>
      <PortraitFrame src="/cats/gato4.jpg" className={"bottom-12 right-6 rotate-[13deg]"}/>
      <PortraitFrame src="/cats/gato5.jpg" className={"bottom-16 left-96 rotate-12"}/>
      <PortraitFrame src="/cats/gato6.jpg" className={"top-64 right-[24%] rotate-[7deg]"}/>
<button
  className="relative h-12 px-8 rounded-lg overflow-hidden transition-all duration-500 group"
  onClick={() => setIsOpen(true)}
>
  <div
    className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#654358] via-[#17092A] to-[#2F0D64]"
  >
    <div className="absolute inset-0 bg-[#170928] rounded-lg opacity-90"></div>
  </div>
  <div className="absolute inset-[2px] bg-[#170928] rounded-lg opacity-95"></div>
  <div
    className="absolute inset-[2px] bg-gradient-to-r from-[#170928] via-[#1d0d33] to-[#170928] rounded-lg opacity-90"
  ></div>
  <div
    className="absolute inset-[2px] bg-gradient-to-b from-[#654358]/40 via-[#1d0d33] to-[#2F0D64]/30 rounded-lg opacity-80"
  ></div>
  <div
    className="absolute inset-[2px] bg-gradient-to-br from-[#C787F6]/10 via-[#1d0d33] to-[#2A1736]/50 rounded-lg"
  ></div>
  <div
    className="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(199,135,246,0.15)] rounded-lg"
  ></div>
  <div className="relative flex items-center justify-center gap-2">
    <span
      className="text-lg font-normal bg-gradient-to-b from-[#D69DDE] to-[#B873F8] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(199,135,246,0.4)] tracking-tighter"
    >
      Clique aqui
    </span>
  </div>
  <div
    className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#2A1736]/20 via-[#C787F6]/10 to-[#2A1736]/20 group-hover:opacity-100 rounded-lg"
  ></div>
</button>
<Popup isOpen={isOpen}/>
    </div>
  );
}
