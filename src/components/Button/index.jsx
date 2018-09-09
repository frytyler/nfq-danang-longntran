import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {
  static defaultProps = {
    classes: 'btn-default',
    name: '',
  }

  render() {
    const {
      name,
      classes,
      ...restProps
    } = this.props;
    const classNames = ['btn', classes].filter(Boolean).join(' ');

    return (
      <button
        aria-label={name}
        type="button"
        role="button"
        className={classNames}
        {...restProps}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  classes: PropTypes.string,
};

export default Button;
