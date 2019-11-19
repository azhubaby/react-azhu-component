"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/* eslint-disable react/no-unknown-property */

/* eslint-disable indent */
// import "./index.scss";
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
          type = _this$props.type,
          tag = _this$props.tag,
          outline = _this$props.outline,
          size = _this$props.size,
          block = _this$props.block,
          active = _this$props.active,
          disabled = _this$props.disabled,
          children = _this$props.children,
          onClick = _this$props.onClick;

      var _classType = "btn-".concat(type);

      var _classOutline = outline ? "btn-outline-".concat(type) : '';

      var _classSize = "btn-".concat(size);

      var _classBlock = block ? "btn-".concat(block) : '';

      var _classActive = active ? 'active' : '';

      var _isOutline = _classOutline || _classType;

      var _class = "btn ".concat(_isOutline, " ").concat(_classSize, " ").concat(_classBlock, " ").concat(_classActive);

      switch (tag) {
        case 'button':
          return _react.default.createElement("button", {
            type: "button",
            className: _class,
            onClick: onClick,
            disabled: disabled
          }, children);

        case 'link':
          return _react.default.createElement("a", {
            className: _class,
            href: "#",
            role: "button",
            "aria-pressed": active
          }, children);

        case 'input':
          return _react.default.createElement("input", {
            className: _class,
            type: "button",
            value: children
          });

        case 'submit':
          return _react.default.createElement("input", {
            className: _class,
            type: "submit",
            value: children
          });

        case 'reset':
          return _react.default.createElement("input", {
            className: _class,
            type: "reset",
            value: children
          });

        default:
          return _react.default.createElement("button", {
            type: "button",
            className: _class,
            onClick: onClick,
            disabled: disabled
          }, children);
      }
    }
  }]);
  return _default;
}(_react.default.Component);

exports.default = _default;
_default.propTypes = {
  type: _propTypes.default.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']),
  tag: _propTypes.default.oneOf(['button', 'link', 'input', 'submit', 'reset']),
  outline: _propTypes.default.oneOf([true, false]),
  size: _propTypes.default.oneOf(['lg', 'sm']),
  block: _propTypes.default.oneOf([true, false]),
  active: _propTypes.default.oneOf([true, false]),
  disabled: _propTypes.default.oneOf([true, false])
};
_default.defaultProps = {
  type: 'primary',
  tag: 'button',
  outline: false,
  size: 'lg',
  block: false,
  active: false,
  disabled: false
};
module.exports = exports.default;