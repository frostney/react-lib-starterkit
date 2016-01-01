'use strict';

var React = require('react');
var React__default = 'default' in React ? React['default'] : React;

function babelHelpers_classCallCheck (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

function babelHelpers_inherits (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

function babelHelpers_possibleConstructorReturn (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var InputSomething = (function (_Component) {
  babelHelpers_inherits(InputSomething, _Component);

  function InputSomething() {
    babelHelpers_classCallCheck(this, InputSomething);
    return babelHelpers_possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  InputSomething.prototype.render = function render() {
    return React__default.createElement('input', null);
  };

  return InputSomething;
})(React.Component);

var HelloWorld = (function (_Component) {
  babelHelpers_inherits(HelloWorld, _Component);

  function HelloWorld() {
    babelHelpers_classCallCheck(this, HelloWorld);
    return babelHelpers_possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  HelloWorld.prototype.render = function render() {
    return React__default.createElement(
      'div',
      null,
      'Hello ',
      this.props.name
    );
  };

  return HelloWorld;
})(React.Component);

HelloWorld.propTypes = {
  name: React.PropTypes.string
};
HelloWorld.defaultProps = {
  name: 'world'
};

exports.HelloWorld = HelloWorld;
exports.InputSomething = InputSomething;