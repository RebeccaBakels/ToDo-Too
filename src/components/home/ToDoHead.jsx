import React, {useState, useContext} from 'react' 
import { Input, Space, Avatar } from 'antd';
import {UserContext} from '../../App'
const { Search } = Input

function ToDoHead({ setToDoListItems }) {
    const { user } = useContext(UserContext)
    const [newToDo, setNewToDo] = useState(null)

    function addToDo() {
        if(newToDo && newToDo.item && newToDo.item.trim()) {
            console.log({newToDo})
            fetch(`https://todo-too-rb-api.web.app/tasks${user.uid}`, {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               }, 
               body: JSON.stringify(newToDo)
            })
            .then(res => res.json())
            .then(data => setToDoListItems(data))
            .catch(err => console.log('error:', err))
        }
        setNewToDo(null)
    }

    const greeting = (!user)
    ? 'Guest'
    : user.displayName || 'User!'

    const userImage = (!user || !user.photoURL) ? null : <Avatar size={64} src={user.photoURL} />

    return (
    <header style={{ textAlign: 'center' }}>
        <h1 >Welcome {greeting} {userImage}</h1>
        <h2>To-Do Too!</h2>
        {user && <Space direction="vertical">
        <Search
            placeholder="new item"
            allowClear
            enterButton="ADD"
            size="large"
            value={newToDo ? newToDo.item : null}
            onChange={(event) => setNewToDo({item: event.target.value, userId: user.uid })}
            onSearch={addToDo}
        />
        </Space>}
    </header>
    )
}

export default ToDoHead