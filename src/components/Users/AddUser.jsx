import React from 'react'
import { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'

function AddUser({ onAddUser }) {
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')
  const [error, setError] = useState()

  const addUserHandler = (e) => {
    e.preventDefault()

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      })

      return
    }

    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      })

      return
    }

    onAddUser(username, age)
    setUsername('')
    setAge('')
  }

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value)
  }

  const ageChangeHandler = (e) => {
    setAge(e.target.value)
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
            value={username}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (years):</label>
          <input
            className="px-2 py-1 focus:outline-none rounded border border-cyan-500 text-gray-500"
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
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
