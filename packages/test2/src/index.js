import React, { Component } from 'react';

class Test2 extends Component {
  render() {
    const { handleOnclick } = this.props;

    return (
      <button onClick={handleOnclick}>react stateful button</button>
    );
  }
}

export default Test2;