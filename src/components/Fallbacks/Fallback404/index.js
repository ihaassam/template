import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

function Fallback404() {
  return (
    <Result
      className="p-bottom-0"
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to="/">
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
}
export default Fallback404;
