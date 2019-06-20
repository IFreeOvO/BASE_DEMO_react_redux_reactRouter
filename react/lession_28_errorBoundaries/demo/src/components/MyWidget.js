import React from "react";

class MyWidget extends React.Component {
  render() {
    return (
        <div>
          <h1>MyWidget</h1>
          <span>
            测试错误
            {this.state.abc.s}
          </span>
        </div>
    );
  }
}

export default MyWidget;
