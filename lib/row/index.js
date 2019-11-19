"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

// eslint-disable-next-line react/prefer-stateless-function
var _default =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(_default, _React$Component);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).apply(this, arguments));
  }

  (0, _createClass2.default)(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["children", "className"]);
      return (// eslint-disable-next-line react/jsx-props-no-spreading
        _react.default.createElement("div", (0, _extends2.default)({
          className: (0, _classnames.default)('row', className)
        }, otherProps), children)
      );
    }
  }]);
  return _default;
}(_react.default.Component);

exports.default = _default;
_default.propTypes = {
  children: _propTypes.default.string,
  className: _propTypes.default.string
};
_default.defaultProps = {
  children: '',
  className: ''
};
module.exports = exports.default;