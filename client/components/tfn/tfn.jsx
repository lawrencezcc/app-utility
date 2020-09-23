import React from 'react';

import { Container } from '../container/container';
import { CustomBadge } from '../customBadge/customBadge';

import { getTFN } from '../../api/tfn';

export default class TFN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      containerType: '',
      tfns: [],
    };
    this.fetchTFN = this.fetchTFN.bind(this);
  }

  fetchTFN() {
    return getTFN().then((data) => {
      console.log(data.tfn);
      console.log(this.state.tfns);
      this.setState({
        tfns: [...this.state.tfns, data.tfn],
      });
    });
  }

  render() {
    const components = this.state.tfns.map((tfn, index) => (
      <CustomBadge key={index} text={tfn} />
    ));

    return (
      <React.Fragment>
        <h1>TFN Generator</h1>
        <button onClick={this.fetchTFN}>Generate</button>
        <div className="c-flex">{components}</div>
      </React.Fragment>
    );
  }
}
