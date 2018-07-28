import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, ButtonToolbar, Button } from 'react-bootstrap';

const JobAction = ({ onOpenModal }) => (
  <Row className="show-grid">
    <Col xs={6} md={8} className="vcenter">
      <h3 className="panel-title">Jobs</h3>
    </Col>
    <Col xs={6} md={4} className="text-right vcenter">
      <ButtonToolbar className="pull-right">
        <Button bsStyle="primary" className="mr-1" onClick={onOpenModal}>Create a job</Button>
        <Button bsStyle="primary">Export CSV</Button>
      </ButtonToolbar>
    </Col>
  </Row>
);

JobAction.propTypes = {
  onOpenModal: PropTypes.func,
};

JobAction.defaultProps = {
  onOpenModal: () => ({}),
};

export default JobAction;
