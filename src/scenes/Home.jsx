import React, {useState} from 'react'
import ToDoHead from '../components/home/ToDoHead'
import ToDoList from '../components/home/ToDoList'

function Home() {
    const initalItems = JSON.parse(localStorage.getItem('toDoList')) 
    || [{item: 'apple', done: false}, 
        {item: 'orange', done: true}, 
        {item: 'banana', done: false}]
    const [toDoListItems, setToDoListItems] = useState(initalItems)

    return (
    <>
        <ToDoHead toDoListItems = {toDoListItems} setToDoListItems={setToDoListItems}/>
        <ToDoList toDoListItems = {toDoListItems} setToDoListItems={setToDoListItems}/>
    </>
    )
}

export default Home