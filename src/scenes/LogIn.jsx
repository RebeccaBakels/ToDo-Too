import React, {useContext, useState} from 'react' 
import { useHistory } from "react-router-dom";
import firebase from 'firebase'
import { Form, Input, Button, Checkbox, Typography } from 'antd'
import {GoogleOutlined} from '@ant-design/icons';
import { UserContext } from '../App'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
}

const LogIn = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { setUser } = useContext(UserContext)
  let history = useHistory()
  const onFinish = ({email, password}) => {
     setLoading(true)
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
          setError(null)
          setUser(res.user)
          setLoading(false)
          history.push("/")
        })
        .catch(err => {
          setLoading(false)
          setError(err.message)
        })
  }

  const loginWithGoogle = () => {
    setLoading(true)
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then(res => {
      setError(null)
      setUser(res.user)
      console.log(res.user)
      setLoading(false)
      history.push("/")
    })
    .catch(err => { 
      setLoading(false)
      setError(err.message)
    })
  }

  const onFinishFailed = (errorInfo) => {
    setLoading(false)
    console.log('Failed:', errorInfo)
    setError('Please input a valid email and password')
  }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item {...tailLayout}>
      <React.Fragment>
            <Typography.Text type="danger">{error}</Typography.Text>
            <br />
      </React.Fragment>
        <Button  loading = {loading} type="primary" htmlType="submit">
          Login
        </Button>
        
      </Form.Item>
      <Form.Item {...tailLayout}>
      <Button ghost
          type="primary"
          icon={<GoogleOutlined />}
          loading={loading}
          onClick={() => loginWithGoogle()}
        >
        Login with Google        
        </Button>
      </Form.Item>
    </Form>
  )
}


export default LogIn