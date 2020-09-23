import React from 'react';

import { Layout } from 'antd';

import './style/index.scss';

export default class LayoutWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { header, content, footer } = this.props;
    return (
      <Layout>
        {header}
        {content}
        {footer}
      </Layout>
    );
  }
}
