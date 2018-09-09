import React from 'react';
import PropTypes from 'prop-types';

import SearchBox from '../../../components/SearchBox';
import Button from '../../../components/Button/index';

const ActionBar = ({ onOpenModal, onSearch }) => (
  <div className="action-bar">
    <SearchBox onSearch={onSearch} />
    <div className="action-bar__right">
      <Button classes="btn-primary" onClick={onOpenModal}>Create new item</Button>
    </div>
  </div>
);

ActionBar.propTypes = {
  onOpenModal: PropTypes.func,
  onSearch: PropTypes.func,
};

ActionBar.defaultProps = {
  onOpenModal: () => {},
  onSearch: () => {},
};

export default ActionBar;
