import React from 'react'
import { motion } from "framer-motion"
import Backdrop from './Backdrop'
import tailwind from "../assets/development/tailwind-css.svg"
import html from "../assets/development/html-5.svg"
import css from "../assets/development/file-type-css.svg"
import bootstrap from "../assets/development/bootstrap-plain-wordmark.svg"
import materialui from "../assets/development/materialui-original.svg"
import rt from "../assets/development/react.svg"
import next from "../assets/development/next-js.svg"
import redux from "../assets/development/redux-original.svg"
import node from "../assets/development/file-type-node.svg"
import mongodb from "../assets/development/mongodb-icon.svg"
import express from "../assets/development/express-original.svg"
import js from "../assets/language/javascript.svg"
import python from "../assets/language/python.svg"
import java from "../assets/language/java.svg"
import c from "../assets/language/c.svg"
import cpp from "../assets/language/cpp3.svg"
import git from "../assets/tools/git.svg"
import github from "../assets/tools/github.svg"
import postman from "../assets/tools/postman.svg"
import firebase from "../assets/tools/file-type-firebase.svg"
import vscode from "../assets/tools/file-type-vscode.svg"
const dropin = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500
        }
    },
    exit: {
        y: "100vh",
        opacity: 0
    }
}
const Modal = ({ handleClose, text, number }) => {
    return (
        <Backdrop
            onClick={handleClose}
        >
            {number === 1 &&
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    variants={dropin}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                     className="motion-modal"
                >
                     {/* {number === 1 && <div className="motion-modal"> */}
                    <div className='header'>
                       Fullstack Web Developer
                    </div>
                    <div className='content'>
                        <div className='box'>
                            <img src={html} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>HTML</h5>
                        </div>
                        <div className='box'>
                            <img src={css} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>css</h5>
                        </div>
                        <div className='box'>
                            <img src={js} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>java script</h5>
                        </div>

                        <div className='box'>
                            <img src={tailwind} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>tailwind css</h5>
                        </div>
                        <div className='box'>
                            <img src={bootstrap} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>Bootstrap</h5>
                        </div>
                        <div className='box'>
                            <img src={materialui} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>materialui</h5>
                        </div>
                        <div className='box'>
                            <img src={rt} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>React js</h5>
                        </div>
                        <div className='box'>
                            <img src={next} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>Next js</h5>
                        </div>
                        <div className='box'>
                            <img src={redux} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>react redux</h5>
                        </div>

                        <div className='box'>
                            <img src={node} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>Node js</h5>
                        </div>
                         <div className='box'>
                            <img src={mongodb} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>mongodb</h5>
                        </div>
                         <div className='box'>
                            <img src={express} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>express</h5>
                        </div>
                    </div>
                    <div className='bottem'>
                        <button onClick={handleClose} className="close-btn">Close</button>
                    </div>
                    {/* </div> */}
            </motion.div>
            }
            {number === 2 &&
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="motion-modal"
                    variants={dropin}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className='header'>
                    programming languages
                    </div>
                    <div className='content'>
                    <div className='box'>
                            <img src={c} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>C</h5>
                        </div><div className='box'>
                            <img src={cpp} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>c++</h5>
                        </div><div className='box'>
                            <img src={js} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>java script</h5>
                        </div><div className='box'>
                            <img src={java} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>Java</h5>
                        </div><div className='box'>
                            <img src={python} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>python</h5>
                        </div>
                    </div>
                    <div className='bottem'>
                        <button onClick={handleClose} className="close-btn">Close</button>
                    </div>
                </motion.div>
            }
            {number === 3 &&
                <motion.div
                    onClick={(e) => e.stopPropagation()}
                    className="motion-modal"
                    variants={dropin}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className='header'>
                        Tools
                    </div>
                    <div className='content'>
                    <div className='box'>
                            <img src={git} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>git</h5>
                        </div><div className='box'>
                            <img src={github} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>github</h5>
                        </div><div className='box'>
                            <img src={vscode} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>vs code</h5>
                        </div><div className='box'>
                            <img src={postman} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>postman</h5>
                        </div><div className='box'>
                            <img src={firebase} alt="" srcset="" className='icon' />
                            <h5 className='icon-text font-semibold text-lg'>firebase</h5>
                        </div>
                    </div>
                    <div className='bottem'>
                        <button onClick={handleClose} className="close-btn">Close</button>
                    </div>
                </motion.div>
            }
            
        </Backdrop>
    )
}

export default Modal
