import React from 'react';
import { Layout, Row, Col } from 'antd';
const { Content } = Layout;

import { Container } from '../container/container';
import TFN from '../tfn/tfn';

import './style/index';

export default class ContentWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      containerType: 'tfn',
    };
  }

  render() {
    const tabSwitcher = (containerType) => {
      switch (containerType) {
        case 'tfn':
          return <Container component={<TFN />} />;
        case 'abn':
          return <Container component="" />;
        default:
          return;
      }
    };
    return (
      <Content className="content">
        <Row>
          <Col className="c-col" flex span={4}>
            4
          </Col>
          <Col className="c-col" flex span={16}>
            {tabSwitcher(this.state.containerType)}
          </Col>
          <Col className="c-col" flex span={4}>
            4
          </Col>
        </Row>
      </Content>
    );
  }
}
