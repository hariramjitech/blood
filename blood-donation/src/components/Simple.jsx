import React, { useState } from 'react'
import list from '../assets/Bank.json'
import './Simple.css'
import { Link } from 'react-router-dom';

export const Simple = () => {
    const [Bank]=useState(list)
  return (
      <>
    <div className="bank-container">
         {Bank.map((Bank)=>(
            <div className='detail'>
            <h1 className='font'>{Bank.name}</h1>
            <h3 className='my_h3'>{Bank.place}</h3>
            <h2 className='contact'>PHONE: {Bank.contact}</h2>
            </div>
            ))}
    </div>
            <div className="button-cont">
            <Link to="/request">
            <button>Request online</button>
          </Link>
            </div>
            </>
  )
}

