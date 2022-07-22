import React from 'react'

export default function Card({ details, togglebtn,deletebtn }) {
  
  return (
    <div className='cardbox' key={details.id}>
      <p>Subject : {details.name} </p>
      <p>Details : {details.disc} </p>
      <p>Completed : {details.status === true ? "YES" : "NO"} </p>
      <button className='deletebtn' onClick={() => deletebtn(details.id)}>Delete</button>
      <button className='editbtn' onClick={() => togglebtn(details.id, details.status)}>Toggle</button>
    </div>
  )
}
