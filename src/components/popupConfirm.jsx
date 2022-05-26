import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
export default function PopupConfirm({itemAdd, setItemAdd, sttsAdd, nameItem,valueAdd }) {

  useEffect(() => {
    if(itemAdd){
      const popup = document.querySelector('.popup')
    popup.classList.add('show')
    
    setTimeout(() => {
      popup.classList.remove('show')
      setItemAdd(false)
    }, 4000);
    }
  }, [itemAdd, sttsAdd,nameItem, valueAdd ])
  
  return (
    <div className={`popup grid justify-center text-center w-64 h-16 right-[-10px] text-white  rounded-md fixed z-50 bg-blue-900 text-[14px] pt-2 border-white border-2`}>
         {sttsAdd === 'vazio' ? <h1 className='mx-4'>É necessário adicionar uma quantidade!</h1>: <><span> <span className=' font-bold'>#{valueAdd}</span> {nameItem} Adicionado</span>
    <NavLink to='/cart' className='text-red-600  font-semibold hover:text-red-800 transition-all'>Ver carrinho</NavLink></>}
    
    </div>
  )
}
