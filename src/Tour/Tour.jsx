import React, { useState } from 'react'
import NotInterestedBtn from '../NotInterestedBtn/NotInterestedBtn'
import './Tour.css'
const Tour = ({id, name, info, image, price, removeTour}) => {
  const[readMore, setReadMore]=useState(false)
  return (
    <section className="tour">
      <img src={image} alt={name} />
      <div className="name">{name}</div>
      <div className="description">
        <p className='info'>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className='showMore' onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <div className='price'>$ {price}</div>
        <NotInterestedBtn removeTour={removeTour} id={id} />
      </div>
    </section>
  );
}

export default Tour