/* eslint-disable no-plusplus */
/* eslint-disable object-curly-newline */
import { Button, Layout, Menu } from 'antd';
import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  VideoCameraOutlined,
  TeamOutlined
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import menuItemsList from '../../../utils/menu-items-list';
import { userGlobalContext } from '../../context/global/UserGlobalContext';
import MenuItemsList from '../../../domain/models/generic/menu-items-list-interface';
import Permissions from '../../../utils/permissions-user';

import HeaderMenuLayout from './HeaderMenuLayout/HeaderMenuLayout';

import './menu-layout.scss';

const { Sider, Footer, Content } = Layout;
const { SubMenu } = Menu;

const MenuLayout: FunctionComponent<{ menuItem: string; children: React.ReactNode }> = ({
  menuItem,
  children
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [itemsList, setItemsList] = useState<MenuItemsList[]>(menuItemsList ?? []);

  const history = useHistory();

  const { user } = userGlobalContext();

  useEffect(() => {
    setCurrentItem([menuItem]);
    const keys = menuItemsList.find((item) => {
      if (item.subItems) {
        for (let index = 0; index < item.subItems.length; index++) {
          const subItem = `${item.name}-${item.subItems[index].name}`;
          if (menuItem === subItem) {
            return true;
          }
        }
      }
      return false;
    });
    setOpenKeys(keys ? [keys.name] : []);

    const actualPermission = Permissions[user!.role];
    const userItemsList = menuItemsList?.filter((itemList) => {
      const menu = actualPermission.menuItems.find((item) => item.name === itemList.name);
      return !!menu;
    });
    if (userItemsList) {
      setItemsList(userItemsList);
    }
  }, []);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const toggleSubMenu = ({ key }: { key: string }) => {
    const included = openKeys.includes(key);
    const newOpenKeys = !included ? [key, ...openKeys] : openKeys.filter((o) => o !== key);
    setOpenKeys(newOpenKeys);
  };

  const goTo = (url: string) => {
    history.push(url);
  };

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
                    icon={<VideoCameraOutlined />}
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
                  icon={<TeamOutlined />}
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
