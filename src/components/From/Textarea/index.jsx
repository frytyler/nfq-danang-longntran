import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.PureComponent {
  static defaultProps = {
    placeholder: '',
    classes: '',
    name: '',
    onBlur: () => {},
    onKeyUp: () => {},
    onChange: () => {},
  };

  render() {
    const {
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
      <textarea
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

TextArea.propTypes = {
  placeholder: PropTypes.string,
  classes: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
};

export default TextArea;
