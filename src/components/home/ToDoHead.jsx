import React, {useState} from 'react' 
import { Input, Space } from 'antd';

const { Search } = Input

function ToDoHead({ toDoListItems, setToDoListItems }) {
    const [newToDo, setNewToDo] = useState(null)

    function addToDo() {
        setToDoListItems([...toDoListItems, newToDo])
        localStorage.setItem('To-Do List:', JSON.stringify([...toDoListItems, newToDo]))
        setNewToDo('')
    }

    return (
    <header style={{ textAlign: 'center' }}>
        <h1 >Welcome Guest</h1>
        <h2>To-Do Too!</h2>
        <Space direction="verticle">
        <Search
            placeholder="new item"
            allowClear
            enterButton="ADD"
            size="large"
            value={newToDo}
            onChange={(event) => setNewToDo(event.target.value)}
            onSearch={addToDo}
        />
        </Space>
    </header>
    )
}

export default ToDoHead