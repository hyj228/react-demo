import React, { Component } from 'react';
import { Form, Icon, Input, Button, message, Table } from 'antd';
class FileImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileImgData: null
    };
  }
  componentDidMount() {
    this.getData()
  }
  getData = () => {
    this.setState({isLoading:true})
    window.Maxios.get('/file').then(res => {
      if (res.data.code === 200) {
        this.setState({
          fileImgData: res.data.data,
          isLoading:false
        })
      } else {
        this.setState({isLoading:false})
        console.log(res.data.data)
        message.info(res.data.data.sqlMessage);
      }
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        window.Maxios.post('/add_file', values).then(res => {
          console.log(res.data.code, '/////')
          if (res.data.code === 200) {
            message.success('添加成功');
            this.getData()
            // this.props.userInfoAction(res.data.data)
            // this.props.history.push('/lay/current/react-crop-img')
          } else {
            console.log(res.data.data)
            message.info(res.data.data.sqlMessage);
          }
        })
      }
    });
  }
  handDel=(id)=>{
    window.Maxios.delete(`/del_file?id=${id}`).then(res => {
      console.log(res.data.code, '/////')
      if (res.data.code === 200) {
        message.success('删除成功');
        this.getData()
        // this.props.userInfoAction(res.data.data)
        // this.props.history.push('/lay/current/react-crop-img')
      } else {
        console.log(res.data.data)
        message.info(res.data.data.sqlMessage);
      }
    })
  }
  render() {
    const { fileImgData,isLoading } = this.state
    const { getFieldDecorator } = this.props.form;
    const columns = [
      {
      title: '文件id',
      dataIndex: 'id',
      key: 'id',
    },{
      title: '文件名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '文件链接',
      dataIndex: 'link',
      key: 'link',
      render: text => <img style={{width:'100px'}} src={text} alt="错误"/>,
    },{
      title: '操作',
      rowKey :(record,index)=> index,
      render: (text,record) => {
        return <Button onClick={()=>this.handDel(record.id)}>删除</Button>},
    }];
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入文件名称' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="文件名称" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('link', {
              rules: [{ required: true, message: '请输入文件链接' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="文件链接" />
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">上传</Button>
        </Form>
        <Table rowKey='id' columns={columns} dataSource={fileImgData} loading={isLoading} />
      </div>
    );
  }
}
const FileImgFrom = Form.create({ name: 'file_img' })(FileImg);
export default FileImgFrom

