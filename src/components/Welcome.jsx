import React from "react";
import { NavLink } from "react-router-dom";
export default function Welcome() {
  return (
    <div className="grid gap-4  mt-[50px] relative justify-center pt-[40px] text-center">
      <p className="nTitle font-bold text-white">
        <span className="">Vingadores</span>{" "}
        <span className="flex text-center items-center justify-center gap-2">
          Burger
        </span>
      </p>
      <p className="text-white ">O melhor e mais barato da região!</p>
      <div className="buttons flex text-center justify-center gap-3 mt-10">
        <NavLink to="/menu">
          <button className="bg-red-700 text-white font-semibold px-7 py-2 rounded-full hover:text-red-500 hover:bg-white transition-all">
            Cardápio
          </button>
        </NavLink>
        <button className="bg-blue-700 text-white font-semibold px-7 py-2 rounded-full hover:text-blue-500 hover:bg-white transition-all">
          Contato
        </button>
      </div>
    </div>
  );
}
