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
          lg = _this$props.lg,
          md = _this$props.md,
          sm = _this$props.sm,
          xl = _this$props.xl,
          xs = _this$props.xs;

      var _lg, _md, _sm, _xl, _xs;

      _lg = lg ? "col-lg-".concat(lg) : '';
      _md = md ? "col-md-".concat(md) : '';
      _sm = sm ? "col-sm-".concat(sm) : '';
      _xl = xl ? "col-xl-".concat(xl) : '';
      _xs = xs ? "col-".concat(xs) : '';
      _lg = lg === true ? 'col-lg' : _lg;
      _md = md === true ? 'col-md' : _md;
      _sm = sm === true ? 'col-sm' : _sm;
      _xl = xl === true ? 'col-xl' : _xl;
      _xs = xs === true ? 'col' : _xs;
      var defaultClass = !lg && !md && !sm && !xl && !xs && 'col';
      return _react.default.createElement("div", {
        className: (0, _classnames.default)(defaultClass, className, _lg, _md, _sm, _xl, _xs)
      }, children);
    }
  }]);
  return _default;
}(_react.default.Component);

exports.default = _default;
_default.propTypes = {
  children: _propTypes.default.string,
  className: _propTypes.default.string,
  lg: _propTypes.default.string,
  md: _propTypes.default.string,
  sm: _propTypes.default.string,
  xl: _propTypes.default.string,
  xs: _propTypes.default.string
};
_default.defaultProps = {
  children: '',
  className: '',
  lg: '',
  md: '',
  sm: '',
  xl: '',
  xs: ''
};
module.exports = exports.default;