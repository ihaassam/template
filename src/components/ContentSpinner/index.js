import React from 'react';
import { Spin } from 'antd';
import './contentSpinner.css';

function ContentSpinner() {
  return <Spin className="content-spinner flex-center" size="large" />;
}
export default ContentSpinner;
