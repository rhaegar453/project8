import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

export default class Groups extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div
          style={{ marginTop: "20px" }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <SearchBar />
        </div>
        <SearchResults/>
      </div>
    );
  }
}
