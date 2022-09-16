import React from 'react'
import { useState } from 'react'
import Container from './components/UI/Container'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App() {
  const [users, setUsers] = useState([])

  const addUserHandler = (username, age) => {
    setUsers((prev) => [...prev, { username, age }])
  }

  return (
    <Container>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </Container>
  )
}

export default App
