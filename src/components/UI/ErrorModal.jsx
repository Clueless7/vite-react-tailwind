import React from 'react'
import Card from './Card'
import Button from './Button'

function ErrorModal({ title, message }) {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-slate-500/80 ">
      <Card className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white min-w-max max-w-4xl">
        <div className="flex flex-col gap-4 items-center">
          <header>
            <h2 className="font-bold text-2xl">{title}</h2>
          </header>
          <div>{message}</div>
          <footer>
            <Button primary>Okay</Button>
          </footer>
        </div>
      </Card>
    </div>
  )
}

export default ErrorModal
