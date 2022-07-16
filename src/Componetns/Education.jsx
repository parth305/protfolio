import React from 'react'

const Education = () => {
  return (
    <div id="education" className="bg-lime-200 layer5">
      <h1 className="text-2xl text-center text-black">Education</h1>
      <div className='education-container py-4 text-left'>
        <div className='sm:mx-0 mx-5'>
        <div className='education-box py-3'>
          <h1 className='text-xl font-bold'>Vishwakarma Government Engineering College<br/>Ahemdabad - B.E</h1>
          <p className='text-base pl-1'>Current CGPA 8.43</p>
          <small className='text-xs pl-1'>2019 to 2023</small>
        </div>
        <div className='education-box py-3'>
          <h1 className='text-xl font-bold'>J.B and S.A high school<br/>Vyara - 12 <sup>th</sup></h1>
          <p className='text-base pl-1'>scored 86.4% in 12 <sup>th</sup> and secured 3 rank in district</p>
          <small className='text-xs pl-1'>2018 to 2019</small>
        </div>
        <div className='education-box py-3'>
          <h1 className='text-xl font-bold'>J.B and S.A high school<br/>Vyara - 10 <sup>th</sup></h1>
          <p className='text-base pl-1'>Scored 82% in 10 <sup>th</sup></p>
          <small className='text-xs pl-1'>2016 to 2017</small>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Education
