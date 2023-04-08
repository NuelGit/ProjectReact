import React from 'react'
import Card from '../UI/Card'
import classes from './UsersList.module.css'

const UsersList = ({users}) => {

  return (

    <Card cssClass={classes.users} > 
    <ul>

        {users.map((user, index) =>(
            <li key={index}>
                {user.name} ({user.age} Years old)
            </li>
        ))}
    
    </ul>
    </Card>
  )
}

export default UsersList