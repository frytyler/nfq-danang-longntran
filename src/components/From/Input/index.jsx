import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.PureComponent {
  static defaultProps = {
    type: 'text',
    placeholder: '',
    classes: '',
    name: '',
    onBlur: () => {},
    onKeyUp: () => {},
    onChange: () => {},
  }

  render() {
    const {
      type,
      placeholder,
      onBlur,
      onChange,
      onKeyUp,
      classes,
      name,
      ...restProps
    } = this.props;
    const classNames = ['form-input', classes].filter(Boolean).join(' ');
    return (
      <input
        type={type}
        aria-label={name}
        className={classNames}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={onChange}
        onKeyUp={onKeyUp}
        {...restProps}
      />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  classes: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
};

export default Input;
