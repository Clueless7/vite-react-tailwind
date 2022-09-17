import React from 'react'

function Card({ children, className, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`mx-auto mb-4 shadow-md rounded-md p-6 ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
