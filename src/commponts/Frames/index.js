import React, { PureComponent } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import { getDataMeun } from '../../api/index'
import logo from '../../assets/images/000111.svg'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

@withRouter
class index extends PureComponent {
  constructor(props) {
    super()
    this.state = {
      datameun: [],
      submeun: [],
      breadcrumbData: [],
      subselectkeys: ['/index/home']
    }


  }
  componentDidMount() {
    const datameun = getDataMeun()
    this.setState({
      datameun,
      submeun: datameun[0].children
    })
  }
  state = {
    current: 'mail',
  };

  handleClick = e => {
    this.setState({ current: e.key });
  }

  setSubMeun({ item, key, keyPath, domEvent }) {
    const { datameun } = this.state
    const obj = datameun.find(item => item.id === key)
    if (obj) {
      this.setState({
        submeun: obj.children,
        subselectkeys: [obj.children[0].children[0].url]
      }, () => {
        this.props.history.push(obj.children[0].children[0].url)
      })
    }
  }

  showMeunPage({ item, key, keyPath, domEvent }) {
    // const { submeun } = this.state
    // const obj = submeun[0].children[Number(key)]
    this.props.history.push(key)
  }

  render() {
    return (
      <Layout style={{
        height: '100vh'
      }} >
        <Header className="header" style={{
          'display': 'flex',
          padding: '0'
        }}>
          <div className="logo" style={{
            display: 'flex',
            width: '200px',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#fff'
          }}>
            <img src={logo} alt='' />
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['workberch']} onClick={({ item, key, keyPath, domEvent }) => {
            this.setSubMeun({ item, key, keyPath, domEvent })
          }}>
            {this.state.datameun.map(item => {
              return (<Menu.Item key={item.id}>{item.name}</Menu.Item>)
            })}
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={this.state.subselectkeys}
              selectedKeys={
                (path => {
                  const pathname = path.split('/')
                  const defaultpathkey = `/${pathname[1]}/${pathname[2]}`
                  return [defaultpathkey]
                })(this.props.location.pathname)
              }
              defaultOpenKeys={['0']}
              style={{ height: '100%', borderRight: 0 }}
              onClick={({ item, key, keyPath, domEvent }) => {
                this.showMeunPage({ item, key, keyPath, domEvent })
              }}
            >
              {this.state.submeun.map((item, index) => {
                return (
                  <SubMenu key={index} icon={<UserOutlined />} title={item.name}>
                    {item.children.map((itemex) => {
                      return (<Menu.Item key={itemex.url}>{itemex.name}</Menu.Item>)
                    })}
                  </SubMenu>
                )
              })}
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout >
    );
  }
}

export default index
