import React from 'react';
import { Layout } from 'antd';
const { Header } = Layout;

import Nav from '../nav/nav';

import './style/index';
export default class HeaderWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navData: [],
    };
  }

  render() {
    return (
      <Header className="header">
        <div className="logo" />
        <Nav data={this.state.navData} />
      </Header>
    );
  }
}
