import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'reactstrap';

import SearchBox from '../../../components/SearchBox';

const ActionBar = ({ onOpenModal, onSearch }) => (
  <Row>
    <Col md="8">
      <SearchBox onSearch={onSearch} className="float-left" />
    </Col>
    <Col md="4">
      <div className="float-right">
        <Button color="primary" onClick={onOpenModal}>Create new item</Button>
      </div>
    </Col>
  </Row>
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
