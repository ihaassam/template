import React from 'react';
import './addrequest.css';
import { Form, Input, Button} from 'antd';

const AddRequestForm = () => {
  const [form] = Form.useForm();
  return (
    <Form
      className="form-request"
      name="basic"
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 10 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      form={form}
    >
      <Form.Item name="shopId" label="Shop ID" >
        <Input placeholder="Input Shop ID" />
      </Form.Item>
      <Form.Item name="surveyorId" label="Surveyor ID" >
        <Input placeholder="Input Surveyor ID" />
      </Form.Item>
      <Form.Item name="routeId" label="Route ID" >
        <Input placeholder="Input Route ID" />
      </Form.Item>
     
      <Form.Item name="callBackUrl" label="CallBack URL" >
        <Input placeholder="https://www.google.com" type="url" />
      </Form.Item>
      <Form.Item name="imageKey" label="Image Key" >
        <Input placeholder="Input Image Key" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddRequestForm;
