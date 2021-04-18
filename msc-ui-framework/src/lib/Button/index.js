import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

/**
 * TODO:  isLoading
 */
const Button = ({
  type,
  onclick,
  className,
  color,
  size,
  rounded,
  disabled,
  children,
  fullRounded,
  outlined,
  flat,
}) => {
  const sizeStyle = {
    'text-base': ['lg', 'md', 'sm'].includes(size),
    'text-sm': size === 'xs',
  };

  const spacing = !fullRounded
    ? {
        'px-10': true,
        'py-5': size === 'lg',
        'py-4': size === 'md',
        'py-3': size === 'sm',
        'py-2': size === 'xs',
      }
    : {
        'w-16 h-16': size === 'lg',
        'w-12 h-12': size === 'md',
        'w-10 h-10': size === 'sm',
        'w-8 h-8': size === 'xs',
      };

  const roundedStyle = {
    'rounded-4xl': rounded && !fullRounded,
    'rounded-full': fullRounded,
  };

  const coloredButton = {
    [`btn-${color}`]: !disabled,
    'btn-disabled': color === 'disabled' || disabled,
  };

  const outlineButton = {
    border: outlined,
    [`btn-${color}-outlined`]: !disabled,
    [`text-${color}`]: outlined || (flat && !disabled),
    [`border-${color}`]: outlined && !disabled,
    'text-monochromes text-opacity-25': color === 'disabled' || disabled,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={cn('btn', {
        ...(outlined || flat ? outlineButton : coloredButton),
        ...sizeStyle,
        ...roundedStyle,
        ...spacing,
        [className]: className,
      })}
      onClick={onclick}
    >
      <div className="inline-flex items-center">{children}</div>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  onclick: PropTypes.func,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'error',
    'success',
    'warning',
    'transparent',
    'disabled',
  ]),
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'xs']),
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: 'button',
  onclick: () => {},
  className: '',
  children: null,
  color: 'primary',
  size: 'lg',
  rounded: true,
  disabled: false,
  fullRounded: false,
  outlined: false,
  flat: false,
};

export default Button;
