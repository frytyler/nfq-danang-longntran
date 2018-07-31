import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, ButtonToolbar, Button } from 'react-bootstrap';

import SearchForm from './SearchForm';

const JobAction = ({ onOpenModal, onSearch }) => (
  <Row className="show-grid">
    <Col xs={6} md={4} className="vcenter">
      <SearchForm onSearch={onSearch} />
    </Col>
    <Col xs={6} md={8} className="text-right vcenter">
      <ButtonToolbar className="pull-right">
        <Button bsStyle="primary" className="mr-1" onClick={onOpenModal}>Create a job</Button>
        <Button bsStyle="primary">Export CSV</Button>
      </ButtonToolbar>
    </Col>
  </Row>
);

JobAction.propTypes = {
  onOpenModal: PropTypes.func,
  onSearch: PropTypes.func,
};

JobAction.defaultProps = {
  onOpenModal: () => ({}),
  onSearch: () => ({}),
};

export default JobAction;
