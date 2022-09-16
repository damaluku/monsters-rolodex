import React, { Component } from "react";
import "./searchBox.css";

class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeholder, className } = this.props;

    return (
      <div>
        <input
          type="search"
          placeholder={placeholder}
          className={`${className}`}
          onChange={onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
