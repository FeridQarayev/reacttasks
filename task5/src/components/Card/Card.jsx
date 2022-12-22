import React from 'react'
import { useEffect } from 'react'
import './Card.css'
function Card({dataa}) {
  console.log(dataa)
  return (
    <div className='card'>
      <div className='container'>
        <div style={{backgroundImage:`url(${dataa.url})`}} className='imgg'></div>
        <div className='text' >
          <div className='title'>{dataa.title}</div>
          <div className='description'>{dataa.thumbnailUrl}</div>
        </div>
      </div>
    </div>
  )
}

export default Card