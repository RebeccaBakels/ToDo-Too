import React  from 'react' 
import {List, Button} from 'antd'

function ListItem({item, setLoading, setToDoListItems}) {
  const thisClassName = item.done ? 'done' : ''
  return (
  <List.Item 
  actions={[
  <Button type='primary' key="list-done"  onClick={() => itemAction('done', item, setLoading, setToDoListItems)}>done</Button>,
  <Button type='danger' key="list-delete"  onClick={() => itemAction('delete', item, setLoading, setToDoListItems)}>delete</Button>
  ]}
  className = {thisClassName}>{item.item}
  </List.Item>
  )
}


//THIS IS A FUNCTION NOT A COMPONENT SO I CAN REF PARAMS DIRECTLY NOT THROUGH PROPS
function itemAction(action, item, setLoading, setToDoListItems) {
 setLoading(true)
 const API_URL = `https://todo-too-rb-api.web.app/tasks/${item.userId}/${item.id}`
 const params = (action === 'done')
 ? {
  method: 'PATCH',
  headers: {
      'Content-Type': 'application/json'
  }, 
  body: JSON.stringify({done: !item.done})
}
: {
  method:'DELETE'
}
fetch(API_URL, params)
.then(res => res.json())
.then(data => {
  setToDoListItems(data)
  setLoading(false)
})
.catch(err => {
  console.log('error updating item:', err)
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