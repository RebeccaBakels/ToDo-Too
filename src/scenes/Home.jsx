import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../App'
import ToDoHead from '../components/home/ToDoHead'
import ToDoList from '../components/home/ToDoList'

function Home() {
    const [toDoListItems, setToDoListItems] = useState([])
    const {user} =useContext(UserContext)
    useEffect(() => {
        if (user){
        fetch(`https://todo-too-rb-api.web.app/tasks/${user.uid}`,)
        .then(res => res.json())
        .then(data => setToDoListItems(data))
        .catch(err => console.log('error:', err))
        } else {
            setToDoListItems([])
        }
    }, [user])

    return (
    <>
        <ToDoHead toDoListItems = {toDoListItems} setToDoListItems={setToDoListItems}/>
        <ToDoList toDoListItems = {toDoListItems} setToDoListItems={setToDoListItems}/>
    </>
    )
}

export default Home