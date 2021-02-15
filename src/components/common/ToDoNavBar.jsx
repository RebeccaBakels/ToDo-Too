import React from 'react' 
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
const { Header } = Layout

function ToDoNavBar() {
    return (
    
    <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/LogIn">Login</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/SignUp">Sign Up</Link></Menu.Item>
    </Menu>
    </Header>
    )
}

export default ToDoNavBar