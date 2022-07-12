import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="bg-white">
        <h1 className="text-2xl text-center text-black">Contact</h1>

        <form action="https://script.google.com/macros/s/AKfycbyueuUeApF-bmoHIUEb4X04VqBPSh8DiSEtwOj1hk0mFC7I8OGmb_s8iaWU3k3aBkJg/exec" method='POST' className='form-container'>
            <label htmlFor="name">Name</label>
            <input type="text" name='name' className='inpt' />
            <label htmlFor="profession">Profession</label>
            <input type="text" name='profession' className='inpt' />
            <label htmlFor="email">Email</label>
            <input type="email" name='email' className='inpt' />
            <label htmlFor="phone">Phone</label>
            <input type="phone" name='phone'  className='inpt'/>
            <label htmlFor="msg">Message</label>
            <textarea type="text" name='msg' rows={5} cols={20} className='inpt'/>
            <button class="contact-btn" type='submit' onClick={()=>setTimeout(() => {
              window.location.reload(false)
            }, 1000)}>Submit</button>
        </form>
        
    </div>
  )
}

export default Contact
