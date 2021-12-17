import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

function Fallback500() {
  return (
    <Result
      status="500"
      title="An Error Occurred"
      subTitle="There has been an error. It’s been reported to the site administrators via email and should be fixed shortly. Thanks for your patience."
      extra={
        <Link to="/">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
}

export default Fallback500;
