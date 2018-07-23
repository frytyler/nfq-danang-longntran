import React from 'react';
import { Grid, Row, Panel } from 'react-bootstrap';

function UsersView() {
  return (
    <Grid>
      <Row className="show-grid">
        <Panel>
          <Panel.Heading>Panel heading without a title</Panel.Heading>
          <Panel.Body>Panel content</Panel.Body>
        </Panel>
      </Row>
    </Grid>
  );
}

export default UsersView;
