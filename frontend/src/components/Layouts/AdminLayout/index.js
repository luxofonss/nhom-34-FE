import { FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons'
// import { ProductAdd } from  '@src/containers/app/feature/Admin/pages/ProductAdd'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { useState } from 'react'
const { Header, Content, Footer, Sider } = Layout
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label
  }
}
const items = [
  getItem('Thêm sản phẩm', '1', <UserOutlined />),
  getItem('Option 2', '2', <UserOutlined />),
  getItem('User', 'sub1', <FileOutlined />, [getItem('Tom', '3'), getItem('Bill', '4'), getItem('Alex', '5')]),
  getItem('Team', 'sub2', <UserOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <PieChartOutlined />)
]
const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  return (
    <Layout
      style={{
        minHeight: '100vh'
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className='demo-logo-vertical' />
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline' items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer
          }}
        />
        <Content
          style={{
            margin: '0 16px'
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: 'center'
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}
export default AdminLayout
