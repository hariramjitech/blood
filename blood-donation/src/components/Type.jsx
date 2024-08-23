import React, { useState } from 'react'
import './Type.css'
import { Link } from 'react-router-dom';
export const Type = ({product}) => {

  return (
      
        <div className="type">
          <div className="img">
            <img src={product.pic} alt={product.blood}/>
          </div>
          <div className="details">
               <h1>{product.blood}</h1>
               <Link to="/Bank">
            <button>Needed</button>
          </Link>
          </div>
        </div>
      
  )
}
