import React from "react";

export default function Links() {
  return (
    <div style={{ textAlign: "left" }} id="links">
      <h2>Links to useful resources</h2>

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
      <h2>Coding Challenges</h2>
      <li>
        <a href="https://edabit.com/" target="_blank" rel="noopener noreferrer">Edabit Coding Challenges</a>
      </li>
      <li>
        <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer">Hacker Rank</a>
      </li>
      <li><a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">Leet Code</a></li>
      <hr/>
    </div>
  );
}
