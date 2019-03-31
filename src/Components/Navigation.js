import React, { Component } from "react";
import "./Navigation.css";
import { withRouter } from "react-router-dom";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: ""
    };
  }

  navigator = event => {
    event.preventDefault();
    this.setState({ page: event.target.name });
    this.props.history.push(event.target.name);
  };

  render() {
    return (
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-primary text-white"
        style={{ fontSize: "18px" }}
      >
        <a
          class="navbar-brand"
          href="#"
          style={{ fontSize: "22px" }}
          //   style={{ color: "white" }}
          name=""
          onClick={this.navigator}
        >
          <i
            class="fas fa-camera-retro fa-lg"
            style={{ marginRight: "10px", fontSize: "40px" }}
          />
          FlickrLy
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li className="nav-item itemSpacing">
              <a
                class="nav-link"
                href="#"
                name="groups"
                onClick={this.navigator}
              >
                <i class="fas fa-layer-group iconSpacing" />
                Groups <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item itemSpacing">
              <a
                class="nav-link"
                href="#"
                name="gallery"
                onClick={this.navigator}
              >
                <i class="far fa-images iconSpacing" />
                Gallery
              </a>
            </li>
            <li class="nav-item itemSpacing">
              <a
                class="nav-link"
                href="#"
                name="overview"
                onClick={this.navigator}
              >
                <i class="far fa-eye iconSpacing" />
                Overview
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navigation);
