import React, { Component } from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-8 col-sd-12" style={{ marginTop: "20px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1 className="display-4 mb-4">
            <u>Groups</u>
          </h1>
        </div>

        <div className="d-flex justify-content-start">
          <i
            class="fas fa-search"
            style={{
              marginTop: "10px",
              marginRight: "10px",
              fontSize: "22px"
            }}
          />
          <input className="form-control" style={{ borderRadius: "30px" }} />
          <button
            className="btn btn-primary"
            style={{
              borderRadius: "30px",
              marginLeft: "10px",
              opacity: "0.8"
            }}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
