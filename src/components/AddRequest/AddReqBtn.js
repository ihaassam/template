import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const AddRequestBtn = () => {
  return (
    <Link to="/add-request">
      <Button type="primary">Add Request</Button>
    </Link>
  );
};

export default AddRequestBtn;
