import React from 'react'

function Button({ type, children, primary, onClick, className }) {
  return (
    <button
      className={`px-4 py-2 rounded text-lg ${
        primary
          ? 'text-white bg-cyan-500 hover:bg-cyan-700'
          : 'border border-cyan-500 hover:bg-slate-100'
      } ${className}`}
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
