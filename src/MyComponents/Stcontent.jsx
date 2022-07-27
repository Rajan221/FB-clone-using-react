import React, { Component } from "react";
import "./Stcontent.css";
import profile from "../img/profile.jpg";
import logo from "../img/logo.png";

function Stcontent(props) {
  return (
    <React.Fragment>
      <div
        style={{
          height: "200px",
          width: "125px",
          marginLeft: "10px",
          backgroundColor: "black",
          borderRadius: "10px",
        }}
        className="frame"
      >
        <div className="backgroundCover">
          <img className="avatar" alt="" />

          <div>
            <img src={props.source} className="background" />
          </div>
          <div className="text">
            <span>{props.title}</span>
          </div>
        </div>
        <div></div>
      </div>
    </React.Fragment>
  );
}

export default Stcontent;
