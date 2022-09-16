import React from 'react'

function Card({ children, className }) {
  return (
    <div className={`mx-auto mb-4 shadow-md rounded-md p-6 ${className}`}>
      {children}
    </div>
  )
}

export default Card
