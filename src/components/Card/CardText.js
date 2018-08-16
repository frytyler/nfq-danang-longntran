import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'p',
};

const CardText = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'card-text',
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

CardText.propTypes = propTypes;
CardText.defaultProps = defaultProps;

export default CardText;
