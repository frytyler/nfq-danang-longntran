import React from 'react';
import PropTypes from 'prop-types';

import Main from './button.styled';

class Button extends React.PureComponent {
  static defaultProps = {
    className: '',
    classes: 'btn-default',
    name: '',
  };

  render() {
    // eslint-disable-next-line
    const { name, classes, className, ...restProps } = this.props;
    const classNames = [className, classes].filter(Boolean).join(' ');

    return (
      <Main
        aria-label={name}
        type="button"
        className={classNames}
        {...restProps}
      >
        {this.props.children}
      </Main>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  classes: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
