import React, {useState, createContext} from 'react'
import { BrowserRouter as Router, Switch, Route }from "react-router-dom";
import firebase from 'firebase'
import { Layout } from 'antd'
import ToDoNavBar from './components/common/ToDoNavBar'
import Home from './scenes/Home'
import LogIn from './scenes/LogIn'
import SignUp from './scenes/SignUp'
import './App.css'
import {firebaseConfig} from './config'
const {Content, Footer} = Layout

firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebase.auth()

export const UserContext = createContext(null)


function App() {
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{user, setUser, firebaseAuth}}>
      <Router>
      <Layout className="layout">
        <ToDoNavBar/>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">
          <Switch>
            <Route path="/LogIn" component={LogIn}/>
            <Route path="/SignUp" component={SignUp}/>
            <Route path="/" component={Home}/>
        </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2021 Created by Boca Code</Footer>
    </Layout>
    </Router>
    </UserContext.Provider>
  )
}

export default App
