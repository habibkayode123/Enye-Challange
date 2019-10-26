import React from 'react';
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
  
  
  

class HorizontalLoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: " ",
            lastName: " ",
            age:" ",
            hobby:" " ,   
            key :1,
            birthDay:"",
            valuenew:""
        }
    }
  
     
    
    onSelect = (value, mode) => {
        let time = value.toLocaleString()
        this.setState({
            birthDay: time
        })
        console.log(time);
        console.log(mode)
    }

      
  handleSubmit = e => {
    e.preventDefault();
    let newKey = this.state.key + 1
    
    let newState = {
        key : this.state.key,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        age: this.state.age,
        hobby: this.state.hobby,
        birthDay:this.state.birthDay
    }

    this.setState({
        key : newKey
    })
   dataSource.push(newState);

   this.setState({
       firstName:"",
       lastName: "",
       age:"",
       hobby:"",
   })
   this.props.form.setFieldsValue(
       {
        lastName : "",
        firstName : "",
        age : "",
        hobby:""  
      })
    };
    handleChange = e => {
        this.props.form.setFieldsValue({[e.target.name]:e.target.value})
        this.setState({
            [e.target.name] : e.target.value
        })  }
        handleChangenew = e =>{
          this.setState({
            valuenew: e.target.value
          })
        }
  

  render() {
    const { getFieldDecorator } = this.props.form;

    // Only show error after a field is touched.
    
    return (
        
      <Form layout="Horizontal" onSubmit={this.handleSubmit}>
      <Table dataSource={dataSource} columns={columns} />
      
        <Form.Item >
          {getFieldDecorator('firstName', {
            rules: [{ required: true, message: 'Please input your firstName' }],
          })(
            <Input  
            onChange = {this.handleChange} name="firstName" 
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="First Name"
            />,
          )}
        </Form.Item>
        <Form.Item >
          {getFieldDecorator('lastName', {
            rules: [{ required: true, message: 'Please input your last Name' }],
          })(
            <Input name="lastName" onChange = {this.handleChange}
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Last Name"
            />,
          )}
        </Form.Item>
        <Form.Item >
          {getFieldDecorator('hobby', {
            rules: [{ required: true, message: 'Please input your hobby' }],
          })(
            <Input name="hobby" onChange = {this.handleChange}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}

              placeholder="hobby"
            />,
          )}
        </Form.Item>
        <Form.Item >
          {getFieldDecorator('age', {
            rules: [{ required: true, message: 'Please input your hobby' }],
          })(
            <Input name="age" onChange = {this.handleChange}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}

              placeholder="Age"
            />,
          )}
        </Form.Item>
        <Form.Item >
        <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
        <Calendar  onSelect={this.onSelect}  />
    
  </div>,
         
            
  
        </Form.Item>
       <Form.Item>
       <Input name="age" onChange = {this.handleChangenew} value = {this.state.valuenew}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}

              placeholder="Age"
            />,
       </Form.Item>
       
        
        <Form.Item>
          <Button type="primary" htmlType="submit" >
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);



export default WrappedHorizontalLoginForm;