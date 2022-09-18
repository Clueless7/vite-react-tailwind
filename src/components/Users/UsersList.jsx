import React from 'react'
import Card from '../UI/Card'

function UsersList({ users }) {
  if (users.length === 0) {
    return
  }

  return (
    <Card>
      <ul>
        {users.map((user, index) => (
          <Card key={index} className="px-4 py-2 mb-1 animate-fade-in">
            <li>
              <span className="font-medium ">{user.username}</span>
              <span className="font-thin"> ({user.age} years old)</span>
            </li>
          </Card>
        ))}
      </ul>
    </Card>
  )
}

export default UsersList
