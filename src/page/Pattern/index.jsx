import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon} from 'antd';

import RouteWithSubRoutes from '../../router/route'
import './index.scss'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Pattern extends Component {
    openPath = '/'+this.props.location.pathname.split('/')[1]+'/'+this.props.location.pathname.split('/')[2]
    state={
        activeSelectedKeys: [this.props.location.pathname],
        activeOpenKeys:[this.openPath]
    }
    handselectMenu=({...data})=>{
        this.props.history.push({...data}.key)
        this.setState({
            activeSelectedKeys:[{...data}.key]
        })
    }
    componentDidMount(){
        
    }
    
  render() {
      const { routes } = this.props
      const { activeSelectedKeys,activeOpenKeys } = this.state
    //   const FancyButton = React.forwardRef((props, ref) => (
    //     <button ref={ref} className="FancyButton">
    //       {props.children}
    //     </button>
    //   ));
      
      // You can now get a ref directly to the DOM button:
    //   const ref = React.createRef();
    return (
        <Layout style={{minHeight:'100%'}}>
            <Header className="header flex">
                <div className="logo" ></div>
            </Header>
            <Layout>
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu mode="inline" onSelect={this.handselectMenu} defaultSelectedKeys={activeSelectedKeys} defaultOpenKeys={activeOpenKeys} style={{ height: '100%', borderRight: 0 }}>
                    {routes.children.map((route, i) =>
                        route.children&&route.children.length?
                        <SubMenu key={route.path} title={<span>{route.icon?<Icon type={route.icon}/>:''}{route.name}</span>}>
                            {route.children.map((child,c)=><Menu.Item key={child.path}>{child.name}</Menu.Item>
                                )}
                        </SubMenu>:<Menu.Item key={route.path}>{route.icon?<Icon type={route.icon}/>:''}{route.name}</Menu.Item>
                        
                    )}
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>{routes.name}</Breadcrumb.Item>
                    {routes.children.map((route, i) =>
                        route.children&&route.children.length?
                            route.children.map((child,c)=>
                                routes.location.pathname===child.path?
                                    <><Breadcrumb.Item key={i}>{route.name}</Breadcrumb.Item><Breadcrumb.Item key={i+''+c}>{child.name}</Breadcrumb.Item></>:'') : routes.location.pathname===route.path?<Breadcrumb.Item key={i}>{route.name}</Breadcrumb.Item>:''
                    )}
                </Breadcrumb>
                <Content style={{
                background: '#fff', padding: 24, margin: 0, minHeight: 280,
                }}
                >
                {/* <>
                    Some text.
                    <h2>A heading</h2>
                    More text.
                    <h2>Another heading</h2>
                    Even more text.
                </>
                <FancyButton ref={ref}>Click me!</FancyButton> */}
                {routes.children.map((route, i) => (
                    route.children&&route.children.length?route.children.map((el,e)=><RouteWithSubRoutes key={i+''+e} {...el} />):<RouteWithSubRoutes key={i} {...route} />
                ))}
                </Content>
            </Layout>
            </Layout>
        </Layout>
    );
  }
}
  export default Pattern