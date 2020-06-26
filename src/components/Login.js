import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Axios from "axios";

const Login = () => {
  const history = useHistory();

  const [error, setError] = useState();
  const [formState, setForm] = useState({
    username: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState();

  const handleSubmit = () => {
    Axios.post("https://web-resources-api.herokuapp.com/api/login", formState)
      .then((res) => {
        setForm({
          username: "",
          password: "",
        });
        localStorage.setItem("loggedIn", true);
        setError("");
        history.push("/admin/7255613851");
      })
      .catch((err) => {
        setError(
          "Username or password incorrect. Please message the channel for help."
        );
      });
  };

  const handleChange = (e) => {
    setForm({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"));
  }, []);

  if (loggedIn === false) {
    history.push("/admin/7255613851");
  }

  return (
    <div
      style={{
        display: "flex",
        background: "#36393F",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        style={{
          background: "#202226",
          width: "500px",
          height: "300px",
          maxWidth: "1440px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box",
          padding: "2%",
        }}
      >
        <h1
          style={{ color: "white", textAlign: "center", letterSpacing: "5px" }}
        >
          LOGIN
        </h1>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        <Input
          placeholder="Username"
          style={{ fontSize: "1.5rem" }}
          value={formState.username}
          onChange={handleChange}
          name="username"
        />
        <Input.Password
          placeholder="Password"
          style={{ marginTop: "5%", fontSize: "1.5rem" }}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
        <Button
          type="dashed"
          ghost
          style={{ textAlign: "center", letterSpacing: "5px", marginTop: "5%" }}
          onClick={handleSubmit}
        >
          SUBMIT
        </Button>
      </form>
    </div>
  );
};

export default Login;
