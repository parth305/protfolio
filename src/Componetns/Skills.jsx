import React from 'react'
import {motion} from "framer-motion"
import { useState } from 'react'
import Modal from './Modal'
const Skills = ({modal,close,open}) => {

 
  return (
    <div id="skills" className="bg-orange-200">
      <h1 className="text-2xl text-center text-black">Skills</h1>

      <div className='skill-btn-container text-black'>
        <motion.button
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        className="save-btn"
        onClick={()=>(modal?close():open(1))}
        >
          Fullstack Web Developer
        </motion.button>
        <motion.button
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        className="save-btn"
        onClick={()=>(modal?close():open(2))}
        >
          Programming Languages
        </motion.button>
        <motion.button
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        className="save-btn"
        onClick={()=>(modal?close():open(3))}
        >
          Tools
        </motion.button>
       
      </div>
    </div>

  )
}

export default Skills
