import React, { useEffect } from 'react'
import { useState } from 'react'

const Navbar = ({shownav}) => {
  let [drop,setdrop]=useState(true)
  let handleclick=(event)=>{
    setdrop(!drop)
  }

  return (
    <nav className="navbar fixed bg-purple-900 w-fit rounded-2xl top-9 font-bold z-10 flex justify-center py-2 px-4" style={{display:shownav?"block":"none"}}>
    <ul className={`flex justify-center align-middle text-white py-2 ${drop?"nav-links-disable":"nav-links-visble"}`}>
        <a href="#home">
            <li className="px-5 py-2 cursor-pointer hover:bg-white hover:text-black  hover:rounded-md">Home</li>
        </a>
        <a href="#experience">
            <li className="px-5 py-2 cursor-pointer hover:bg-white hover:text-black  hover:rounded-md">Experience
            </li>
        </a>
        <a href="#skills">
            <li className="px-5 py-2 cursor-pointer hover:bg-white hover:text-black  hover:rounded-md">Skills</li>
        </a>
        <a href="#projects">
            <li className="px-5 py-2 cursor-pointer hover:bg-white hover:text-black  hover:rounded-md">Projects</li>
        </a>
        <a href="#education">
            <li className="px-5 py-2 cursor-pointer hover:bg-white hover:text-black  hover:rounded-md">Education
            </li>
        </a>
        <a href="#contact">
            <li className="px-5 py-2 cursor-pointer hover:bg-white hover:text-black  hover:rounded-md">Contact</li>
        </a>
    </ul>
    <div className="toggle-btn">
      <button className="btn btn-square btn-ghost text-white" onClick={handleclick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
      </button>
    </div>
  </nav>

  )
}

export default Navbar
