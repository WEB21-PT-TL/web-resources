import React from "react";
import "../App.css";
import "antd/dist/antd.css";
import { Button } from "antd";
import {
  Link,
} from "react-router-dom";

export default function Landing() {

  return (
      <div>
        <header className="App-header">
          <h1 style={{ color: "whitesmoke", textAlign: "center" }}>
            Full Stack <br /> Web Development <br /> Resources
          </h1>
          <Button >
            <Link to="/home">Get Started</Link>
          </Button>
        </header>
      </div>
  );
}
