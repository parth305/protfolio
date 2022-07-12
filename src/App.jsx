import { useState } from 'react'
import './App.css'
import Navbar from './Componetns/Navbar'
import Home from './Componetns/Home'
import Experience from './Componetns/Experience'
import Skills from './Componetns/Skills'
import Projects from './Componetns/Projects'
import Education from './Componetns/Education'
import Contact from './Componetns/Contact'
import Modal from './Componetns/Modal'

function App() {
  let [modal,setmodal]=useState(false)
  let [shownav,setshownav]=useState(true);
  let [btntype,setbtntype]=useState(false);
  let close=()=>{
    setmodal(false)
    setshownav(true)
  }
  let open=(number)=>{
    setmodal(true)
    setshownav(false)
    setbtntype(number)
    console.log(number);
  }
  return (
    <div>
      <Navbar shownav={shownav} />
      <Home className='spacer layer1'/>
      <Experience />
      <Skills modal={modal} close={close} open={open} />
      <Projects />
      <Education />
      <Contact />
      {
          modal && <Modal modalOpen={modal} handleClose={close} number={btntype}/>
        }
    </div>
  )
}

export default App
