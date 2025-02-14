"use client"

import { useState } from "react"
import ButtonArea from "./button-area"

function Popup({isOpen}: {isOpen: boolean}) {
    if(isOpen ){
  return (
    <div className="w-[70%] h-[80%] bg-[#f1f1f1] absolute shadow-2xl rounded-2xl flex p-10 flex-col">
        <h1 className="text-black font-bold text-xl">
            Oi rick lindo,
            aceita ir comigo para um pequenique no parque 🏞️ com direito a vinho dom bosco 🍷 e frutinhas 🍎🍊🍇 e depois assistir o por do sol no observatorio da unicamp 🌅?
        </h1>
        <h2 className="text-black">
            (a data a gente define depois)
        </h2>
        <ButtonArea/>
    </div>
  )}
}

export default Popup