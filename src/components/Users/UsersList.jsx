import React from 'react'
import Card from '../UI/Card'

function UsersList({ users }) {
  if (users.length === 0) {
    return
  }

  return (
    <Card>
      <ul>
        {users.map((user, index) => {
          return (
            <Card key={index} className="px-4 py-2 shadow-sm mb-1">
              <li>
                <span className="font-medium ">{user.username}</span>
                <span className="font-thin"> ({user.age} years old)</span>
              </li>
            </Card>
          )
        })}
      </ul>
    </Card>
  )
}

export default UsersList
