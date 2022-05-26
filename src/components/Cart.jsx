import React, {useEffect} from "react";
import { BsFillTrashFill,BsFillCartXFill } from "react-icons/bs";
export default function Cart({  }) {

 const cart = localStorage.getItem('cart')
 const cartArr = JSON.parse(cart);
  return (
    <div className="container grid w-screen m-auto min-w-[100vw]">
      <h1 className="title-top text-center text-white ">Carrinho de compras</h1>
      <div className="listCart mt-10 w-full">
        <table className="text-white w-full text-left text-sm md:text-base">
          <thead className="p-5 h-10">
            <th>#</th>
            <th className="text-center">Nome</th>
            <th className="hidden md:inline-flex pt-2">Descrição</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Remover</th>
          </thead>
          <tbody>
            {cartArr ?( cartArr.map((item, index) => (
              <tr key={index} className="h-14">
                <td className="font-bold text-red-500 pl-2">{index + 1}</td>
                <td className="pl-4">{item.name}</td>
                <td className="hidden md:inline-flex pt-[14px]">
                  {" "}
                  {item.ingredientes}
                </td>
                <td className="pl-2">
                  {" "}
                  <input
                    className="w-[40px] h-[30px]  text-[12px] pl-2 text-red-700  bg-transparent rounded-full  focus:outline-none focus:shadow-none"
                    type="number"
                    min={1}
                    name="quantidade"
                    id="quantidade"
                    placeholder={item.quantidade}
                  />
                </td>
                <td>{item.valor}</td>
                <td className="text-center">
                  <button className="text-red-600 hover:text-red-200 transition-all active:scale-50">
                    <BsFillTrashFill />
                  </button>
                </td>
              </tr>
            )) ): 
            <div className="flex absolute top-10 w-full h-full justify-center items-center">
                <h1 className=" flex gap-5 cartTitle font-bold text-gray-400 opacity-60"><BsFillCartXFill/> Carrinho Vazio</h1>
            </div>}
          </tbody>
        </table>
        {cartArr ? 
        <div className="w-full flex gap-5 justify-center items-center my-10"> 
          <button className=" py-2 px-6 bg-green-800 text-white cursor-pointer rounded-full">Pedir mais</button>
          <button className=" py-2 px-6 bg-blue-800 text-white cursor-pointer rounded-full">Fazer Pedido</button>
          <button className=" py-2 px-6 bg-red-800 text-white cursor-pointer rounded-full">Limpar Carrinho</button>
        </div> : null}
      </div>
    </div>
  );
}
