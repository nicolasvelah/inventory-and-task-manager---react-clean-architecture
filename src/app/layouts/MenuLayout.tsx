/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import { Button, Layout, Menu } from 'antd';
import React, { FunctionComponent, useState } from 'react';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons';

const { Header, Sider, Footer, Content } = Layout;

/* function AvoidRender(props: { child: React.ReactNode }) {
  return props.child;
} */

// eslint-disable-next-line no-unused-vars
const MenuLayout: FunctionComponent<{ menuItem: string }> = ({ menuItem, children }) => {
  // console.log({ children });
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider collapsible collapsed={collapsed} trigger={null} style={{ position: 'relative' }}>
        <div className="logo" style={{ background: '#fff' }}>
          LOGO
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
        <button
          type="button"
          id="collapse-menu-btn"
          onClick={toggle}
          style={{ position: 'absolute', bottom: 0, width: '100%' }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </button>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: '#fff' }}>
          <div>
            {/* <button type="button" id="collapse-menu-btn" onClick={toggle}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </button> */}
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '15px',
            padding: 24,
            minHeight: 280,
            backgroundColor: '#fff',
            overflowY: 'auto'
          }}
        >
          {children}
        </Content>

        <Footer style={{ textAlign: 'center' }}>ITZAM ©2021</Footer>
      </Layout>
    </Layout>
  );
};

export default MenuLayout;
