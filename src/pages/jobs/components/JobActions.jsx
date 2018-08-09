import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, ButtonToolbar, Button } from 'react-bootstrap';

import SearchForm from './SearchForm';

const JobAction = ({ onOpenModal }) => (
  <Row className="show-grid">
    <Col xs={6} md={6} className="vcenter">
      <SearchForm />
    </Col>
    <Col xs={6} md={6} className="text-right vcenter">
      <ButtonToolbar className="pull-right">
        <Button bsStyle="primary" className="mr-1" onClick={onOpenModal}>Create new job</Button>
      </ButtonToolbar>
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
