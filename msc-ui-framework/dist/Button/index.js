"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

/**
 * TODO:  isLoading
 */
var Button = function Button(_ref) {
  var _coloredButton, _outlineButton;

  var type = _ref.type,
      onclick = _ref.onclick,
      className = _ref.className,
      color = _ref.color,
      size = _ref.size,
      rounded = _ref.rounded,
      disabled = _ref.disabled,
      children = _ref.children,
      fullRounded = _ref.fullRounded,
      outlined = _ref.outlined,
      flat = _ref.flat;
  var sizeStyle = {
    'text-base': ['lg', 'md', 'sm'].includes(size),
    'text-sm': size === 'xs'
  };
  var spacing = !fullRounded ? {
    'px-10': true,
    'py-5': size === 'lg',
    'py-4': size === 'md',
    'py-3': size === 'sm',
    'py-2': size === 'xs'
  } : {
    'w-16 h-16': size === 'lg',
    'w-12 h-12': size === 'md',
    'w-10 h-10': size === 'sm',
    'w-8 h-8': size === 'xs'
  };
  var roundedStyle = {
    'rounded-4xl': rounded && !fullRounded,
    'rounded-full': fullRounded
  };
  var coloredButton = (_coloredButton = {}, (0, _defineProperty2.default)(_coloredButton, "btn-".concat(color), !disabled), (0, _defineProperty2.default)(_coloredButton, 'btn-disabled', color === 'disabled' || disabled), _coloredButton);
  var outlineButton = (_outlineButton = {
    border: outlined
  }, (0, _defineProperty2.default)(_outlineButton, "btn-".concat(color, "-outlined"), !disabled), (0, _defineProperty2.default)(_outlineButton, "text-".concat(color), outlined || flat && !disabled), (0, _defineProperty2.default)(_outlineButton, "border-".concat(color), outlined && !disabled), (0, _defineProperty2.default)(_outlineButton, 'text-monochromes text-opacity-25', color === 'disabled' || disabled), _outlineButton);
  return /*#__PURE__*/_react.default.createElement("button", {
    type: type,
    disabled: disabled,
    className: (0, _classnames.default)('btn', (0, _objectSpread3.default)((0, _objectSpread3.default)((0, _objectSpread3.default)((0, _objectSpread3.default)((0, _objectSpread3.default)({}, outlined || flat ? outlineButton : coloredButton), sizeStyle), roundedStyle), spacing), {}, (0, _defineProperty2.default)({}, className, className))),
    onClick: onclick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inline-flex items-center"
  }, children));
};

Button.defaultProps = {
  type: 'button',
  onclick: function onclick() {},
  className: '',
  children: null,
  color: 'primary',
  size: 'lg',
  rounded: true,
  disabled: false,
  fullRounded: false,
  outlined: false,
  flat: false
};
var _default = Button;
exports.default = _default;