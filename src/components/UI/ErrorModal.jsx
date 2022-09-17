import React from 'react'
import Card from './Card'
import Button from './Button'

function ErrorModal({ title, message, closeModal }) {
  return (
    <div
      onClick={closeModal}
      className="p-4 fixed top-0 left-0 w-screen h-screen bg-slate-500/80 grid place-items-center"
    >
      <Card
        onClick={(e) => e.stopPropagation()}
        className="w-4/5 max-w-md bg-white"
      >
        <div className="flex flex-col gap-4 items-center">
          <header>
            <h2 className="font-bold text-3xl">{title}</h2>
          </header>
          <div className="max-h-96 overflow-y-auto text-center">
            <p>{message}</p>
          </div>
          <footer>
            <Button onClick={closeModal} primary>
              Okay
            </Button>
          </footer>
        </div>
      </Card>
    </div>
  )
}

export default ErrorModal
