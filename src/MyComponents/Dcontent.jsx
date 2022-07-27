import React, { Component } from "react";

function Dcontent(props) {
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          width: " 300px",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <img
          style={{ height: "26px", width: "26px", borderRadius: "50%" }}
          src={props.source}
        />
        <div style={{ marginLeft: "10px" }}>
          <span>{props.title}</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dcontent;
