import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'reactstrap';

import SearchForm from './SearchForm';

const JobAction = ({ onOpenModal }) => (
  <Row>
    <Col md="8">
      <SearchForm className="float-left" />
    </Col>
    <Col md="4">
      <div className="float-right">
        <Button color="primary" onClick={onOpenModal}>Create new item</Button>
      </div>
    </Col>
  </Row>
);

JobAction.propTypes = {
  onOpenModal: PropTypes.func,
};

JobAction.defaultProps = {
  onOpenModal: () => {},
};

export default JobAction;
