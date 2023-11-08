import React from 'react'
import Tour from '../tour/tour'

const Tours = ({tours, removeTour}) => {
  return (
    <div>{tours.map((tour)=>{
      return(
        <Tour key={tour.id} {...tour} removeTour={removeTour}/>
      )
    })}</div>
  )
}

export default Tours