import {React, useState } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from '../UI/Button'

const AddUser = ({onAddUser}) => {
    const [ enteredUserName, setEnteredUsername] = useState('')
    const [ enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (e) =>{
        e.preventDefault()
        if(enteredAge.trim().length ===0 || enteredAge.trim().length ===0){
            return
        }
        if(enteredAge < 1){
            return
        }
        onAddUser(enteredUserName, enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }

    const userNameChangeHandler = (e) =>{
        setEnteredUsername(e.target.value)
    }
    const ageChangeHandler = (e) =>{
        setEnteredAge(e.target.value)
    }
  return (
    <Card cssClass={classes.input} > 
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'> Username</label>
        <input id='username' 
        type='text' 
        value={enteredUserName} 
        onChange={userNameChangeHandler}/>

        <label htmlFor='age'> Age (years)</label>
        <input id='age' 
        type='number' 
        value={enteredAge}
        onChange={ageChangeHandler}/>

        <Button type='submit'> Add User</Button>
    </form>
    </Card>
  )
}

export default AddUser