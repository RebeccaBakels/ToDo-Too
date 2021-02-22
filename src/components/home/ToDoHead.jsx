import React, {useState, useContext} from 'react' 
import { Input, Space, Avatar } from 'antd';
import {UserContext} from '../../App'
const { Search } = Input

function ToDoHead({ setToDoListItems, setLoading }) {
    const { user } = useContext(UserContext)
    const [newToDo, setNewToDo] = useState(null)

    function addToDo() {
        if(newToDo && newToDo.item && newToDo.item.trim()) {
            setLoading(true)
            console.log({newToDo})
            fetch(`https://todo-too-rb-api.web.app/tasks/${user.uid}`, {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json'
               }, 
               body: JSON.stringify(newToDo)
            })
            .then(res => res.json())
            .then(data => {
                setToDoListItems(data)
                setLoading(false)

            })
            .catch(err => {
                console.log('error:', err)
                setLoading(false)
            })
        }
        setNewToDo(null)
    }

    const greeting = (!user)
    ? 'Guest'
    : user.displayName || 'User!'

    const userImage = (!user || !user.photoURL) ? null : <Avatar size={64} src={user.photoURL} />

    return (
    <header style={{ textAlign: 'center', paddingBottom: '40px' }}>
        <h1 style={{color: 'white'}}>Welcome {greeting} {userImage}</h1>
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