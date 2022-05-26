import React from 'react'
import {BsFillCartCheckFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import logo from '../medias/logo.png'
export default function Header() {
  return (
    <header className='w-full min-h-[80px] flex items-center relative overflow-hidden py-4' >
      <nav className="navbar w-full relative flex justify-between px-4 smG:px-10 items-center">
        <div className="logo cursor-pointer text-center flex gap-2">
        <NavLink  to='/' className=''><img className=' w-10 md:w-14' src={logo} alt="logo" /></NavLink>  
        </div>
        <ul className=' gap-4 smG:gap-12 text-[13px] smG:text-sm md:text-base flex'>
          <li>
            <NavLink  to='/' className='text-gray-400 hover:text-red-500 tracking-wider	hover:tracking-widest transition-all hover:font-semibold' activeClassName="active">Início</NavLink>
          </li>
          <li>
            <NavLink  to='menu' className='text-gray-400 hover:text-red-500 tracking-wider	hover:tracking-widest transition-all hover:font-semibold' activeClassName="active">Cardápio</NavLink>
          </li>
          <li>
            <NavLink  to='sobre' className='text-gray-400 hover:text-red-500 tracking-wider hover:tracking-widest	 transition-all hover:font-semibold' activeClassName="active">Sobre</NavLink>
          </li>
        </ul>
        <button>
            <NavLink to='cart'>  <BsFillCartCheckFill className='bg-red-900 w-10 h-10 p-2 rounded-md text-white w-[35px] h-[35px] hover:text-red-500 hover:text-[5px] hover:bg-white transition-all'/></NavLink>  
        </button>
      </nav>
    </header>
  )
}
