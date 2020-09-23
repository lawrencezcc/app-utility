import React from 'react';
import { Button } from 'antd';

export const Btn = (props) => {
  const handleBtnClick = (e) => {
    props.handleBtnClick(e, { isLoading: true, text: 'Generating...' });
  };
  return (
    <Button
      type={props.data.type}
      loading={props.data.isLoading}
      onClick={handleBtnClick}
    >
      {props.data.text}
    </Button>
  );
};
