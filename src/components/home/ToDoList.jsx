import React  from 'react' 
import {List} from 'antd'

function ListItem({item, toDoListItems, setToDoListItems}) {
  const thisClassName = item.done ? 'done' : ''
  return (
  <List.Item 
  onClick= {() => toggleItemDone(item, toDoListItems, setToDoListItems)}
  className = {thisClassName}>{item.item}
  </List.Item>
  )
}

//THIS IS A FUNCTION NOT A COMPONENT SO I CAN REF PARAMS DIRECTLY NOT THROUGH PROPS
function toggleItemDone(item, toDoListItems, setToDoListItems) {
  //need ToDoListItems
  let updatedToDoList = JSON.parse(JSON.stringify(toDoListItems))
  //need item thats clicked
  const itemIndex = updatedToDoList.findIndex(toDoItem => toDoItem.item === item.item)
  //for that item : item.done = !item.done
  updatedToDoList[itemIndex].done = !item.done
  //update State with this new set of values
  setToDoListItems(updatedToDoList)
  localStorage.setItem('toDoList', JSON.stringify(updatedToDoList))
}

function ToDoList({ toDoListItems, setToDoListItems }) {

    return (
        <List 
        size="large"
        bordered
        dataSource={toDoListItems}
        renderItem={item => <ListItem toDoListItems={toDoListItems} setToDoListItems={setToDoListItems} item={item}/>}
      />
    )
}

export default ToDoList