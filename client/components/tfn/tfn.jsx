import React from 'react';

import { Container } from '../container/container';
import { CustomBadge } from '../customBadge/customBadge';

import { getTFN } from '../../api/tfn';
import { Btn } from '../button/button';

export default class TFN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      containerType: '',
      tfns: [],
      generateEventData: {
        type: 'primary',
        text: 'Generating',
        isLoading: false,
      },
    };
    this.fetchTFN = this.fetchTFN.bind(this);
    this.handleGenerateClick = this.handleGenerateClick.bind(this);
  }

  fetchTFN(btnState) {
    return getTFN().then((data) => {
      console.log(data.tfn);
      console.log(this.state.tfns);
      this.setState((prevState) => {
        return {
          tfns: [...this.state.tfns, data.tfn],
          generateEventData: {
            ...prevState.generateEventData,
            isLoading: btnState.isLoading,
            text: btnState.text,
          },
        };
      });
    });
  }

  handleGenerateClick(e, btnState) {
    this.fetchTFN({ isLoading: false, text: 'Generate' });
    this.setState((prevState) => {
      return {
        generateEventData: {
          ...prevState.generateEventData,
          isLoading: btnState.isLoading,
          text: btnState.text,
        },
      };
    });
  }

  render() {
    const components = this.state.tfns.map((tfn, index) => (
      <CustomBadge key={index} text={tfn} />
    ));

    return (
      <React.Fragment>
        <h1>TFN Generator</h1>
        <Btn
          handleBtnClick={this.handleGenerateClick}
          data={this.state.generateEventData}
        />
        {/* <button onClick={this.fetchTFN}>Generate</button> */}
        <div className="c-flex">{components}</div>
      </React.Fragment>
    );
  }
}
