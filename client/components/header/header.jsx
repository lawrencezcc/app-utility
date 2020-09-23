import React from 'react';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

import './style/index';

export const HeaderWrapper = (props) => {
  return (
    <Header className="header">
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  );
};
