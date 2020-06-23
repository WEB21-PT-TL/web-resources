import React from "react";
import { Document } from "react-pdf";

export default function Links() {
  return (
    <div style={{ textAlign: "left" }}>
      <h2>Links</h2>
      <li>
        <a
          href="https://www.educative.io/courses/javascript-fundamentals-before-learning-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Javascript fundamentals before learning React
        </a>
      </li>
      <li>
        <a
          href="https://fullstackopen.com/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Full Stack Open Source
        </a>
      </li>
      <li>
        <a
          href="https://medium.com/@tobie.tsuzuki/getting-started-with-node-js-express-and-knex-5640f595df98"
          target="_blank"
          rel="noopener noreferrer"
        >
          Getting Started with Node.js, Express, and Knex
        </a>
      </li>
      <li>
        <a
          href="https://auth0.com/blog/react-tutorial-building-and-securing-your-first-app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Building and securing your first App (FE/BE)
        </a>
      </li>


      <hr />
    </div>
  );
}
