import React, {useState} from "react"
import Button from "../UI/Button"

import Card from '../UI/Card'
import ErrorModal from "../UI/ErrorModal"

import classes from './AddUser.module.css'

const AddUser=(props)=>{

    const[enteredUsername,setenteredUsername]=useState('')
    const[enteredAge,setenteredAge]=useState('')
    const[error,setError]=useState()

    const addUserHandler=(event)=>{
        event.preventDefault()
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
            setError({
                title:'An invalid details',
                message:'Please enter a valid name and age'
            })
            return
        }
        if(+enteredAge<1){
            setError({
                title:'An invalid age',
                message:'Please enter valid age(>1)'
            })
            return
        }
        props.onAddUser(enteredUsername,enteredAge)
        setenteredUsername('')
        setenteredAge('')
    }

        const Usernamechangehandler=(event)=>{
            setenteredUsername(event.target.value)
        }

        const Agechangehandler=(event)=>{
            setenteredAge(event.target.value)
        }

        const errorhandler=()=>{
            setError(null)
        }

     

    return (
        <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorhandler} />}
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">UserName</label>
            <input id="username" type='text' value={enteredUsername} onChange={Usernamechangehandler}/>
            
            <label htmlFor="age">Age(years)</label>
            <input id="age"type='number'value={enteredAge} onChange={Agechangehandler} />
            <Button type='submit'>AddUser</Button>
            {/* <button type='submit'> Add</button> */}
        </form>
    </Card>
    </div>

    )
}
export default AddUser