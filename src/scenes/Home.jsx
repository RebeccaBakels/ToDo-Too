import React, {useState} from 'react'
import { Layout } from 'antd'
import ToDoNavBar from '../components/common/ToDoNavBar'
import ToDoHead from '../components/home/ToDoHead'
import ToDoList from '../components/home/ToDoList'
const {Content, Footer} = Layout

function Home() {
    const [toDoListItems, setToDoListItems] = useState(JSON.parse(localStorage.getItem('To-Do List:')))

    return (
<Layout className="layout">
        <ToDoNavBar/>
    <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
        <ToDoHead toDoListItems = {toDoListItems} setToDoListItems={setToDoListItems}/>
        <ToDoList toDoListItems = {toDoListItems} setToDoListItems={setToDoListItems}/>
        </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>©2021 Created by Boca Code</Footer>
</Layout>
    )
}

export default Home