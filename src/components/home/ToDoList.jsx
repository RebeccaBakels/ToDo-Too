import React  from 'react' 
import {List} from 'antd'

function ToDoList({ toDoListItems }) {

    return (
        <List 
        size="large"
        bordered
        dataSource={toDoListItems}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    )
}

export default ToDoList