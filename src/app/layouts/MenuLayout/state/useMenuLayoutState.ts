/* eslint-disable no-plusplus */
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import MenuItemsList from '../../../../domain/models/generic/menu-items-list-interface';
import menuItemsList from '../../../../utils/menu-items-list';
import { userGlobalContext } from '../../../context/global/UserGlobalContext';
import Permissions from '../../../../utils/permissions-user';

const useMenuLayoutState = (menuItem: string) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [currentItem, setCurrentItem] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [itemsList, setItemsList] = useState<MenuItemsList[]>(
    menuItemsList ?? []
  );

  const history = useHistory();

  const { user } = userGlobalContext();

  const getOpenKeys = (currentLayoutItem: string) => {
    const keys = menuItemsList.find((item) => {
      if (item.subItems) {
        for (let index = 0; index < item.subItems.length; index++) {
          const subItem = `${item.name}-${item.subItems[index].name}`;
          if (currentLayoutItem === subItem) {
            return true;
          }
        }
      }
      return false;
    });

    return keys;
  };

  const getPermissions = () => {
    const actualPermission = Permissions[user!.role];
    const userItemsList = menuItemsList?.filter((itemList) => {
      const menu = actualPermission.menuItems.find(
        (item) => item.name === itemList.name
      );
      return !!menu;
    });
    if (userItemsList) {
      return userItemsList;
    }

    return [];
  };

  useEffect(() => {
    setCurrentItem([menuItem]);

    const keys = getOpenKeys(menuItem);
    setOpenKeys(keys ? [keys.name] : []);

    const userItemsList = getPermissions();
    setItemsList(userItemsList);
  }, []);

  const toggle = () => {
    const keys = getOpenKeys(menuItem);
    const currentOpenKeys = keys ? [keys.name] : [];
    const openKeysList = !collapsed ? [] : currentOpenKeys;

    setOpenKeys(openKeysList);

    setCollapsed(!collapsed);
  };

  const toggleSubMenu = ({ key }: { key: string }) => {
    const included = openKeys.includes(key);
    const newOpenKeys = !included
      ? [key, ...openKeys]
      : openKeys.filter((o) => o !== key);
    setOpenKeys(newOpenKeys);
  };

  const goTo = (url: string) => {
    history.push(url);
  };

  return {
    currentItem,
    itemsList,
    collapsed,
    user,
    openKeys,
    actions: {
      toggle,
      toggleSubMenu,
      goTo
    }
  };
};

export default useMenuLayoutState;
