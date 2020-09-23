import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

import './style/index';

export default class FooterWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Footer className="footer">Footer</Footer>;
  }
}
