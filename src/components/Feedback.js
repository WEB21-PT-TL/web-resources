import React from "react";
import { Form, Input, Button, Select } from "antd";
import "antd/dist/antd.css";

export default function Feedback() {
  const layout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 10 },
  };
  return (
    <div>
      <h2> Do you have any Feedback? </h2>
      <h5>
        Feel free to suggest any resources you have found helpful that are not
        listed here, <br/>topics you think we should add or expand on, or simply leave
        a kind message. <br/> Any and all feedback is welcome.{" "}
      </h5>
      <br />

      <Form>
        <Form.Item
          {...layout}
          label="Email"
          name="Email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Select" {...layout}>
          <Select>
            <Select.Option value="other">
              I'd like to Suggest a Resource
            </Select.Option>
            <Select.Option value="other">Please add a topic</Select.Option>
            <Select.Option value="other">Mistake/Misleading Info</Select.Option>
            <Select.Option value="other">Thank you!</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...layout}
          label="Message"
          name="Message"
          rules={[{ required: true, message: "Please leave a message" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Button id="feedback">Submit</Button>
      </Form>
      <br/>
      <br/>
      <h6>Brought to you by your favorite TL's: <br/>Aja Blanco and Nathaniel Richards</h6>
      {/* , Songa Mugenzi, James Coulter, <br/>Eddie Blanciak, Latosha Tims, Jay Ren, and Marc Tapp.</h6> */}
    </div>
  );
}
