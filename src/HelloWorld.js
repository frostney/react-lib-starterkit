import React, { Component, PropTypes } from 'react';

class HelloWorld extends Component {
  static propTypes = {
    name: PropTypes.string,
  };

  static defaultProps = {
    name: 'world',
  };

  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

export default HelloWorld;
