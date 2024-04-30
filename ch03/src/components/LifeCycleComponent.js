import React, { Component } from "react";

export default class LifeCycleComponent extends Component {
  state = {
    count: 0,
    isVisible: true,
  };

  componentDidMount() {
    console.log("componentDidMount...");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate...");
    // 🔔shouldComponentUpdate는 무조건 return true; 해줘야함!🔔
    return true;
  }

  render() {
    console.log("render...");

    return (
      <div className="LifeCycleComponent">
        <h4>LifeCycleComponent</h4>
        <p>
          count : {this.state.count}
          <button
            onClick={() => {
              this.setState({ count: this.count + 1 });
            }}
          >
            증가
          </button>
        </p>
      </div>
    );
  }

  componentDidUpdate() {
    console.log("componentDidUpdate...");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount...");
  }
}
