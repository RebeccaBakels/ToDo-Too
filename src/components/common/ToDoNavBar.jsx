import React, {useContext} from 'react' 
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { UserContext } from '../../App'
const { Header } = Layout


function ToDoNavBar() {
    const { user, setUser, firebaseAuth } = useContext(UserContext)
    function SignOut() {
        firebaseAuth.signOut()
        .then(() => {
            setUser(null)
        })
        .catch((error) => console.log(error))
    }
    return (

    <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        {
        !user ?
        <>
        <Menu.Item key="2"><Link to="/LogIn">Login</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/SignUp">Sign Up</Link></Menu.Item>
        </>
        :
        <Menu.Item key="4" onClick={() => SignOut()}><Link to="/">Logout</Link></Menu.Item>
    }
    </Menu>
    </Header>
    )
}

export default ToDoNavBar