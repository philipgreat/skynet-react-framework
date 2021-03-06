import React from 'react';
import { Link } from 'dva/router';
import { Menu, Icon } from 'antd';
import PermissionSettingService from '../permission/PermissionSetting.service';
import appLocaleName from './Locale.tool';
import { sessionObject } from '../utils/utils';

const { filterForMenuPermission } = PermissionSettingService;

const defaultIsMenuItemForDisplay = (item, targetObject, targetComponent) => {
  return true;
};

const defaultFilteredMenuItems = (targetObject, targetComponent) => {
  const menuData = sessionObject('menuData');
  const isMenuItemForDisplayFunc =
    targetComponent.props.isMenuItemForDisplayFunc || defaultIsMenuItemForDisplay;
  return menuData.subItems
    .filter(item => filterForMenuPermission(item, targetObject, targetComponent))
    .filter(item => isMenuItemForDisplayFunc(item, targetObject, targetComponent));
};
const defaultFilteredNoGroupMenuItems = (targetObject, targetComponent) => {
  return defaultFilteredMenuItems(targetObject, targetComponent).filter(
    item => item.viewGroup === '__no_group'
  );
};

const defaultFilteredMenuItemsGroup = (targetObject, targetComponent) => {
  const groupedMenuItems = [];
  const menuData = sessionObject('menuData');
  const { internalName } = menuData;
  const { viewGroupItemOf } = window;
  defaultFilteredMenuItems(targetObject, targetComponent)
    .filter(item => item.viewGroup !== '__no_group')
    .map(item => {
      const { viewGroup } = item;
      const { presentOrder } = viewGroupItemOf(internalName, viewGroup);
      let result = groupedMenuItems.find(viewGroupItem => viewGroupItem.viewGroup === viewGroup);

      if (!result) {
        // group not found
        result = { viewGroup, subItems: [], presentOrder };
        console.log('result', result, internalName, viewGroup);
        groupedMenuItems.push(result);
      }

      const { subItems } = result;
      subItems.push(item);
      return item;
    });
  // console.log("groupedMenuItems", groupedMenuItems.sort((a,b)=>a.presentOrder-b.presentOrder))
  return groupedMenuItems.sort((a, b) => a.presentOrder - b.presentOrder);
};

const defaultRenderMenuItem = (item, targetObject, targetComponent) => {
  const menuData = sessionObject('menuData');
  const targetApp = sessionObject('targetApp');
  const { objectId, appId } = targetApp;
  const finalAppId = appId || objectId;

  const userContext = null;
  return (
    <Menu.Item key={item.name}>
      <Link id={`${menuData.menuFor}-${finalAppId}-${item.name}`}
        to={`/${menuData.menuFor}/${finalAppId}/list/${item.name}/${
          item.displayName
        }${appLocaleName(userContext, 'List')}`}
      >
        <Icon type="bars" style={{ marginRight: '20px' }} />
        <span>{item.displayName}</span>
      </Link>
    </Menu.Item>
  );
};

const BizAppTool = {
  defaultIsMenuItemForDisplay,
  defaultFilteredMenuItems,
  defaultFilteredNoGroupMenuItems,
  defaultFilteredMenuItemsGroup,
  defaultRenderMenuItem,
};

export default BizAppTool;
