/* eslint-disable no-plusplus */
/* eslint-disable object-curly-newline */
import React from 'react';
import { Button, Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import HeaderMenuLayout from './HeaderMenuLayout/HeaderMenuLayout';
import useMenuLayoutState from './state/useMenuLayoutState';
import './menu-layout.scss';

const { Sider, Footer, Content } = Layout;
const { SubMenu } = Menu;

const MenuLayout: React.FC<{
  menuItem: string;
}> = ({ menuItem, children }) => {
  const {
    actions: { goTo, toggle, toggleSubMenu },
    currentItem,
    itemsList,
    collapsed,
    user,
    openKeys
  } = useMenuLayoutState(menuItem);

  return (
    <Layout id="menu-layout">
      <HeaderMenuLayout user={user} />
      <div className="content-main">
        <Sider
          collapsible
          collapsed={collapsed}
          trigger={null}
          style={{ position: 'relative' }}
          theme="light"
        >
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={[menuItem]}
            selectedKeys={currentItem}
            openKeys={openKeys}
          >
            {itemsList.map((mainMenu) => {
              if (!mainMenu.subItems) {
                return (
                  <Menu.Item
                    key={mainMenu.name}
                    icon={mainMenu.icon}
                    onClick={() => {
                      goTo(mainMenu.url!);
                    }}
                  >
                    {mainMenu.name}
                  </Menu.Item>
                );
              }

              return (
                <SubMenu
                  key={mainMenu.name}
                  icon={mainMenu.icon}
                  title={mainMenu.name}
                  onTitleClick={toggleSubMenu}
                >
                  {mainMenu.subItems.map((subMenu) => {
                    return (
                      <Menu.Item
                        key={`${mainMenu.name}-${subMenu.name}`}
                        onClick={() => {
                          goTo(subMenu.url);
                        }}
                      >
                        {subMenu.name}
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              );
            })}
          </Menu>

          <Button
            id="collapse-menu-btn"
            onClick={toggle}
            style={{ position: 'absolute', bottom: 0, width: '100%' }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </Sider>

        <div style={{ width: `calc(100% - ${collapsed ? '80' : '200'}px)` }}>
          <Content className="content">{children}</Content>

          <Footer style={{ textAlign: 'center' }}>ITZAM ©2021</Footer>
        </div>
      </div>
    </Layout>
  );
};

export default MenuLayout;
