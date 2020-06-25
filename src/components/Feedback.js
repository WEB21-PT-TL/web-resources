import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import "antd/dist/antd.css";
import Axios from "axios";

export default function Feedback() {
  const [formState, setForm] = useState({
    email: "",
    message: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    Axios.post(
      "https://web-resources-api.herokuapp.com/api/submissions",
      formState
    )
      .then((res) => {
        alert("Form submitted!");
      })
      .catch((err) => {
        alert(
          "Something went wrong, we could not submit your form, try again later."
        );
      });
  };

  const layout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 10 },
  };
  return (
    <div>
      <h2> Do you have any Feedback? </h2>
      <h5>
        Feel free to suggest any resources you have found helpful that are not
        listed here, <br />
        topics you think we should add or expand on, or simply leave a kind
        message. <br /> Any and all feedback is welcome.{" "}
      </h5>
      <br />

      <Form>
        <Form.Item
          {...layout}
          label="Email"
          onChange={handleChange}
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input name="email" value={formState.email} />
        </Form.Item>
        <Form.Item label="Select" {...layout}>
          <Select
            value={formState.reason}
            onChange={(e) => setForm({ ...formState, reason: e })}
          >
            <Select.Option value="I'd like to Suggest a Resource">
              I'd like to Suggest a Resource
            </Select.Option>
            <Select.Option value="Please add a topic">
              Please add a topic
            </Select.Option>
            <Select.Option value="Mistake/Misleading Info">
              Mistake/Misleading Info
            </Select.Option>
            <Select.Option value="Thank you!">Thank you!</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          {...layout}
          label="Message"
          onChange={handleChange}
          rules={[{ required: true, message: "Please leave a message" }]}
        >
          <Input.TextArea name="message" value={formState.message} />
        </Form.Item>
        <Button id="feedback" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <br />
      <br />
      <h6>
        Brought to you by your favorite TL's: <br />
        Aja Blanco, Nathaniel Richards, Songa Mugenzi, James Coulter, <br />
        Eddie Blanciak, Latosha Tims, Jay Ren, and Marc Tapp.
      </h6>
    </div>
  );
}
