import React from 'react';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap';

function JobsView() {
  return (
    <Grid>
      <Row className="show-grid">
        <Panel>
          <Panel.Heading>
            <Row className="show-grid">
              <Col xs={6} md={8}>
                <h3 className="panel-title">Jobs</h3>
              </Col>
              <Col xs={6} md={4} className="text-right">
                <Button bsStyle="primary">Create a job</Button>
              </Col>
            </Row>
          </Panel.Heading>
          <Panel.Body>Panel content</Panel.Body>
        </Panel>
      </Row>
    </Grid>
  );
}

export default JobsView;
