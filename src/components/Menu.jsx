import React, { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import spiderIcon from "../medias/spiderman.png";
import thorIcon from "../medias/mjolnir.png";
import pantherIcon from "../medias/panther.png";
import PopupConfirm from "./popupConfirm";
const ArrBurgers = [
  {
    id: 0,
    name: "Homem Aranha",
    ingredientes: "Pão, carne, queijo, salada e batata palha",
    valor: "R$5,00",
    img: spiderIcon,
  },
  {
    id: 1,
    name: "Thor",
    ingredientes:
      "Pão, carne, ovo, calabresa, salada, batata palha e molho verde da casa",
    valor: "R$9,00",
    img: thorIcon,
  },
  {
    id: 2,
    name: "Pantera Negra",
    ingredientes:
      "Pão, carne, queijo, ovo especial com bacon, salada, bacon, batata palha e molho verde da casa",
    valor: "R$9,00",
    img: pantherIcon,
  },
];
const ArrCart = [];

export default function Menu() {
  const [itemAdd, setItemAdd] = useState(false)
  const [sttsAdd, setSttsAdd] = useState('')
  const [valueAdd, setValueAdd] = useState(0)
  const [nameItem, setNameItem] = useState('')
  const arrLS = JSON.parse(localStorage.getItem("cart"));
  let ct=0
  const addCart = (e, i) => {
    const inputs = document.querySelectorAll("div.card input");
    const inputV = parseInt(inputs[i].value);

    const setItemInArray = (item) => {
      ArrCart.push({
        id: item.id,
        name: item.name,
        ingredientes: item.ingredientes,
        quantidade: inputV,
        valor: item.valor,
      });
      localStorage.setItem("cart", JSON.stringify(ArrCart));
    };
    let r;
    const verifyIfExist = (i) => {
      ArrCart.forEach((item, index) => {
        if ((i.id === item.id) === true) {
          r = true;
        }
      });
      return r;
    };
   
    if (inputV) {
      setItemAdd(!itemAdd)
      setSttsAdd('add')
      setValueAdd(inputV)
      setNameItem(ArrBurgers[i].name)
      if (arrLS) {
        if(ct<1 && ArrCart.length <= 0){
          ArrCart.push(...arrLS);
          ct++
        }
        if (!verifyIfExist(ArrBurgers[i])) {
          setItemInArray(ArrBurgers[i]);
          console.log(ArrCart);
        }else{
          ArrCart[i].quantidade += inputV
          console.log( ArrCart);
        }
      } else {
        setItemInArray(ArrBurgers[i]);
      }
    }else{
      setItemAdd(!itemAdd)
      setSttsAdd('vazio')
    }
    localStorage.setItem('cart', JSON.stringify(ArrCart))
 
  };

  return (
    <>
    <PopupConfirm itemAdd={itemAdd} setItemAdd={setItemAdd} sttsAdd={sttsAdd} valueAdd={valueAdd} nameItem={nameItem}/>
    <div className="menu grid w-screen pt-[40px] z-10  justify-center  text-center gap-10">
      <h1 className=" title-top font-light text-3xl text-white ">
        Nosso Cardápio
      </h1>
      <div className="listTop flex flex-col items-center md:flex-row gap-4 md:gap-5 justify-center w-screen ">
        <input
          type="text"
          className="shadow-none outline-none w-[80%] md:w-[50%] pl-4 pt-2 text-white bg-transparent border-[1px] rounded-full border-red-900"
        />
        <select
          name="filter"
          className="text-sm overflow-hidden shadow-none outline-none bg-red-900 text-white border-none rounded-full px-3 py-2"
          id="filter"
        >
          <option value="relevancia" className="bg-red-800 py-4">
            Relevancia
          </option>
          <option value="caro">Maior preço</option>
          <option value="barato" className="bg-red-800">
            Menor preço
          </option>
        </select>
      </div>
      <div className="grid w-full">
        <div className="title w-full bg-red-900 flex justify-start pl-10 ">
          <h1 className="cTitle text-white pt-2">Burgers</h1>
        </div>
        <div className="listMenu w-full flex flex-wrap gap-20 justify-center my-14">
          {ArrBurgers.map((e, i) => (
            <div
              key={i}
              className="card w-[80%] md:w-[280px] grid relative  min-h-[300px]  rounded-2xl  justify-center px-2"
            >
              <div className="w-[94px] mx-auto">
                <img className="w-full" src={e.img} alt="spiderIcon" />
              </div>
              <h2 className="titleCard text-white text-lg">{e.name}</h2>
              <p className="descCard text-sm text-white">{e.ingredientes}</p>
              <div className="buttonArea flex items-center justify-center gap-5">
                <button
                  onClick={(e) => addCart(e, i)}
                  className=" text-[12px] bg-red-700 text-white font-semibold px-3 py-2 rounded-full hover:text-red-500 hover:bg-white transition-all flex gap-2 items-center"
                >
                  <BsFillCartPlusFill /> Adicionar
                </button>

                <input
                  className="w-[40px] h-[30px]  text-[12px] pl-2 text-red-700 bg-white rounded-full  focus:outline-red-500"
                  type="number"
                  min={1}
                  name="quantidade"
                  id="quantidade"
                  placeholder="0"
                />
              </div>
              <div className="valor absolute bg-red-600 w-[54px] h-[54px] text-sm right-[-20px] top-[-20px] flex justify-center items-center rounded-full">
                <p className="text-white">{e.valor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
    
  );
}
