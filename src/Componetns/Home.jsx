import React from 'react'
import github from "../assets/images/icons8-github.svg"
import leetcode from "../assets/images/leetcode.svg"
import hackerrank from "../assets/images/hackerrank.svg"
import linkedin from "../assets/images/linkedin.svg"
import me from "../assets/images/bhyu.jpeg"
const Home = () => {
  return (
    <div id="home"
        className="text-black conatiner spacer bg-green-200 layer1 flex flex-col-reverse space-y-24 space-y-reverse md:flex-row items-center justify-center pt-36 pb-28 md:space-x-10 md:justify-between md:px-36 lg:px-36 xl:px-72 2xl:justify-around text-center">
        <div className="w-11/12 sm:w-1/2 space-y-2">
            <h1 className="font-bold text-3xl">Parth Pandya</h1>
            <p className="my-1">Hard working college student passinote about coding and building new projects, looking for oppurtunity to work in industry to gain real life experience and learn new thing</p>
            <div className="text-center">
                <button className=" rounded-[50%] mx-2 my-4 hover:cursor-pointer border-2 hover:bg-white hover:fill-white"><a
                        href="https://github.com/parth305" target="_blank"><img src={github} alt=""
                            serset="" width="32px" height="32px"/></a></button>
                <button className=" rounded-[50%] mx-2 my-4 hover:cursor-pointer border-2 hover:bg-white hover:fill-white"><a
                        href="https://leetcode.com/parth305" target="_blank"><img src={leetcode} alt=""
                            serset="" width="32px" height="32px"/></a></button>
                <button className=" rounded-[50%] mx-2 my-4 hover:cursor-pointer border-2 hover:bg-white hover:fill-white"><a
                        href="https://hackerrank.com/PARTH305PANDYA" target="_blank"><img src={hackerrank}
                            alt="" serset="" width="32px" height="32px"/></a></button>
                <button className=" rounded-[50%] mx-2 my-4 hover:cursor-pointer border-2 hover:bg-white hover:fill-white"><a
                        href="https://www.linkedin.com/in/parth-pandya-a048811a1/" target="_blank"><img
                            src={linkedin} alt="" serset="" width="32px" height="32px"/></a></button>
            </div>
        </div>
        <div>
            <img src={me} className="h-60 rounded-[50%]" alt="" serset=""/>
        </div>
    </div>
  )
}

export default Home
