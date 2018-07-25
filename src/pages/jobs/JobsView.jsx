import React from 'react';
import { Grid, Row, Col, Panel, Button,
  ButtonToolbar, Modal, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class JobsView extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }

  handleCloseModal = () => {
    this.setState(() => ({ showModal: false }));
  }

  handleOpenModal = () => {
    this.setState(() => ({ showModal: true }));
  }

  handleCreateJob = (e) => {
    e.preventDefault();
  }

  render() {
    console.log(this.state.showModal);
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
                  <ButtonToolbar className="pull-right">
                    <Button bsStyle="primary" className="mr-1" onClick={this.handleOpenModal}>Create a job</Button>
                    <Button bsStyle="primary">Export CSV</Button>
                  </ButtonToolbar>
                </Col>
              </Row>
            </Panel.Heading>
            <Panel.Body>Panel content</Panel.Body>
          </Panel>
        </Row>
        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create new job</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form id="jobForm" onSubmit={this.handleCreateJob}>
              <FormGroup controlId="title">
                <ControlLabel>Title</ControlLabel>
                <FormControl inputRef={(ref) => { this.jobTitleRef = ref; }} componentClass="input" placeholder="Job title" />
              </FormGroup>
              <FormGroup controlId="desc">
                <ControlLabel>Description</ControlLabel>
                <FormControl inputRef={(ref) => { this.jobDescRef = ref; }} componentClass="textarea" placeholder="Job description" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Media</ControlLabel>
                <FormControl inputRef={(ref) => { this.jobMediaRef = ref; }} componentClass="input" placeholder="Media Url" />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <ButtonToolbar className="pull-right">
              <Button form="jobForm" className="btn-primary" key="submit" type="submit">Create</Button>
              <Button onClick={this.handleCloseModal}>Close</Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
      </Grid>
    );
  }
}

JobsView.propTypes = {
};

JobsView.defaultProps = {
};

export default JobsView;
