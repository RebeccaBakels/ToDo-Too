import React, { useState, useEffect } from 'react'
import ToDoHead from '../components/home/ToDoHead'
import ToDoList from '../components/home/ToDoList'

function Home() {
    const initialItems = 
       [{item: 'apple', done: false}, 
        {item: 'orange', done: true}, 
        {item: 'banana', done: false}]
    const [toDoListItems, setToDoListItems] = useState(initialItems)
    useEffect(() => {
        fetch('https://todo-too-rb-api.web.app/tasks')
        .then(res => res.json())
        .then(data => setToDoListItems(data))
        .catch(err => console.log('error:', err))

    }, [])

    return (
    <>
        <ToDoHead toDoListItems = {toDoListItems} setToDoListItems={setToDoListItems}/>
        <ToDoList toDoListItems = {toDoListItems} setToDoListItems={setToDoListItems}/>
    </>
    )
}

export default Home