import React from "react";
import ReactPlayer from "react-player";

export default function Videos() {
  return (
    <div style={{ textAlign: "left" }} id="videos">
      <h2>Videos</h2>
      <h3>Javascript</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ReactPlayer url="https://www.youtube.com/watch?v=vEROU2XtPR8" />
      </div>
      <h3>React</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ReactPlayer url="https://www.youtube.com/watch?v=sBws8MSXN7A&t=605s" />
      </div>
      <h3>Redux</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ReactPlayer url="https://www.youtube.com/watch?v=93p3LxR9xfM" />
      </div>
      <hr />
    </div>
  );
}
