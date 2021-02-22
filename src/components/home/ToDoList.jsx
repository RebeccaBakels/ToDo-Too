import React  from 'react' 
import {List} from 'antd'

function ListItem({item, setLoading, setToDoListItems}) {
  const thisClassName = item.done ? 'done' : ''
  return (
  <List.Item 
  onClick= {() => toggleItemDone(item, setLoading, setToDoListItems)}
  className = {thisClassName}>{item.item}
  </List.Item>
  )
}

//THIS IS A FUNCTION NOT A COMPONENT SO I CAN REF PARAMS DIRECTLY NOT THROUGH PROPS
function toggleItemDone(item, setLoading, setToDoListItems) {
 setLoading(true)
 fetch(`https://todo-too-rb-api.web.app/tasks/${item.userId}/${item.id}`, {
  method: 'PATCH',
  headers: {
      'Content-Type': 'application/json'
  }, 
  body: JSON.stringify({done: !item.done})
})
.then(res => res.json())
.then(data => {
  setToDoListItems(data)
  setLoading(false)
})
.catch(err => {
  console.log('error updating done state:', err)
  setLoading(false)
})
}

function ToDoList({ toDoListItems, setToDoListItems, loading, setLoading }) {

    return (
        <List 
        size="large"
        loading={loading}
        bordered
        dataSource={toDoListItems}
        renderItem={item => 
        <ListItem  
        setToDoListItems={setToDoListItems} 
        item={item} 
        setLoading={setLoading}/>}
      />
    )
}

export default ToDoList