import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };
  render() {
    return (
      <div>
          {this.state.count === 0 && 'no tags'}
        <h1>Hello World</h1>
        <span style={{ fontSize: 15 }} className={this.getClassess()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(itm => 
            <li key={itm}>{itm}</li>
          )}
        </ul>
      </div>
    );
  }
  getClassess() {
    let classes = " badge m-2 badge-";
    classes += this.state.count === 0 ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
