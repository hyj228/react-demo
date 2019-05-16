import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, message} from 'antd';
import ReactCanvasNest from 'react-canvas-nest';
import {userInfoAction} from '../../redux/actions.js'
import './index.scss'
class Login extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props,'////')
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
        window.Maxios.post('/user_info',values).then(res=>{
          console.log(res.data.code,'/////')
          if(res.data.code===200){
            message.success('登陆成功');
            this.props.userInfoAction(res.data.data)
            this.props.history.push('/lay/current/react-crop-img')
          }else{
            console.log(res.data.data)
            message.info(res.data.data.sqlMessage);
          }
        })
        // 
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <ReactCanvasNest className = 'canvasNest' config = {{ pointColor: ' 255, 255, 255 ' }} style = {{ zIndex: 0 }} ></ReactCanvasNest>
        <Form onSubmit={this.handleSubmit} className="login-from" >
          <h1 className="title">antd管理系统</h1>
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">登 陆</Button>
          </Form.Item>
        </Form>

      </div>
    );
  }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
const mapStateToProps = (state,ownProps) => {
  console.log(state,'////')
  const { Maxios } = state
  return {
    Maxios
  }
}
export default connect(mapStateToProps,{userInfoAction})(WrappedNormalLoginForm);
