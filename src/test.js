import React from 'react';
import {useState, useEffect} from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Form, Icon, Input, Button, Table, Calendar,  } from 'antd';


const dataSource = [
  
  ];
  
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Hobby',
      dataIndex: 'hobby',
      key: 'hobby',
    },
    {
        title: 'Birth Day',
        dataIndex: 'birthDay',
        key: 'birthDay',
      }
  ];
  let key = 1
  function HorizontalLoginForm (props){
    
    const all = useSelector(state =>  state);
    const dispatch = useDispatch();
    
    const [firstName ,setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] =useState("")
    const [birthDay, setBirthDay] = useState("")
    const [hobby,setHobby] = useState("")
    
    return(
      <div>
           <Form layout="Horizontal" onSubmit={e =>{
             e.preventDefault()
             let newState = {
              firstName,
              lastName,
              age,
              birthDay,
              hobby
            }
             dispatch({type : "SUBMITACTION",
                        payload:newState})
            dataSource.push({...all,
                              key})     
              key = key + 1 
              setFirstName("")
              setLastName("")
              setAge("")
              setHobby("")
              setBirthDay("")
           }}>
      <Table dataSource={dataSource} columns={columns} />
      
        <Form.Item >
        
            <Input  value ={firstName}
            onChange = {e=> setFirstName(e.target.value)} name="firstName" 
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="First Name"
            />,
          
        </Form.Item>
        <Form.Item >
            <Input name="lastName" onChange = {e => {setLastName(e.target.value); }} value ={lastName}
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Last Name"
            />,
          
        </Form.Item>
        <Form.Item >
         
            <Input name="hobby" onChange = {e => setHobby(e.target.value)} value ={hobby}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}

              placeholder="hobby"
            />
         
        </Form.Item>
        <Form.Item >
           <Input name="age" onChange = {e=>setAge(e.target.value)} value ={age}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}

              placeholder="Age"
            />
          
        </Form.Item>
        <Form.Item >
        <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
        <Calendar  onSelect={e =>{
          let day = e.toLocaleString();
          setBirthDay(day)
        }}  />
    
  </div>   
         </Form.Item>      
        <Form.Item>
          <Button type="primary" htmlType="submit" >
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
    )
  }
  
  



const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);



export default WrappedHorizontalLoginForm;