import React, { useRef, useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'

function AddUser({ onAddUser }) {
  const [error, setError] = useState(null)
  const usernameRef = useRef()
  const ageRef = useRef()

  const addUserHandler = (e) => {
    e.preventDefault()

    if (
      usernameRef.current.value.trim().length === 0 ||
      ageRef.current.value.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      })

      return
    }

    if (+ageRef < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      })

      return
    }

    onAddUser(usernameRef.current.value, ageRef.current.value)
    usernameRef.current.focus()
    usernameRef.current.value = ''
    ageRef.current.value = ''
  }

  const onHandleError = () => {
    setError(null)
  }

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          closeModal={onHandleError}
        />
      )}
      <Card>
        <form
          className="flex flex-col gap-4 justify-around "
          onSubmit={addUserHandler}
        >
          <label htmlFor="username">Username:</label>
          <input
            className="px-2 py-1 focus:outline-none rounded border border-cyan-500 text-gray-500"
            id="username"
            type="text"
            ref={usernameRef}
          />
          <label htmlFor="age">Age (years):</label>
          <input
            className="px-2 py-1 focus:outline-none rounded border border-cyan-500 text-gray-500"
            id="age"
            type="number"
            ref={ageRef}
          />
          <Button primary type={'submit'}>
            Add user
          </Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser
