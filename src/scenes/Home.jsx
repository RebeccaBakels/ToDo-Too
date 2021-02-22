import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../App'
import ToDoHead from '../components/home/ToDoHead'
import ToDoList from '../components/home/ToDoList'

function Home() {
    const [toDoListItems, setToDoListItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {user} =useContext(UserContext)
    useEffect(() => {
        if (user){
        setLoading(true)
        fetch(`https://todo-too-rb-api.web.app/tasks/${user.uid}`,)
        .then(res => res.json())
        .then(data => {
            setToDoListItems(data)  
            setLoading(false)
        })
        .catch(err => {
            console.log('error:', err)
            setLoading(false)
        })
        } else {
            setToDoListItems([])
            setLoading(false)
        }
    }, [user])

    return (
    <>
        <ToDoHead setLoading={setLoading} setToDoListItems={setToDoListItems}/>
        <ToDoList setLoading={setLoading} loading={loading} toDoListItems = {toDoListItems} setToDoListItems={setToDoListItems}/>
    </>
    )
}

export default Home