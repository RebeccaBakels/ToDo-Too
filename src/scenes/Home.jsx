import React from 'react'
import { Layout } from 'antd'
import ToDoNavBar from '../components/common/ToDoNavBar'
import ToDoHead from '../components/home/ToDoHead'
import ToDoList from '../components/home/ToDoList'

function Home() {
    return (
        <Layout className="layout">
        <ToDoNavBar/>
        <ToDoHead/>
        <ToDoList/>
        </Layout>
    )
}

export default Home