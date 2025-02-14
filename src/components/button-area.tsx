"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";

function getRandomPosition() {
  return {
    top: Math.random() * 80 + "%",
    left: Math.random() * 80 + "%",
  };
}

function ButtonArea() {
  const [pos2, setPos2] = useState({ top: "40%", right: "20%" });
  const [clicouNoSim, setClicouNoSim] = useState(false);

  const throwConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <button
        className="absolute font-bold px-10 py-2 bg-green-500 text-white rounded"
        style={{ top: "40%", left: "20%" }}
        onClick={() => {throwConfetti(); setClicouNoSim(true)}}
      >
        Sim!!!
      </button>
      <button
        className="absolute font-bold px-10 py-2 bg-red-500 text-white rounded"
        style={pos2}
        onMouseEnter={() => setPos2(getRandomPosition())}
      >
        Não :(
      </button>
    {clicouNoSim && <h1 className="font-bold text-7xl text-black mt-52">Marcado!!!</h1>}    </div>
  );
}

export default ButtonArea;
