import React from 'react';
import { Grid, Row, Col, Panel, Button,
  ButtonToolbar, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

/* eslint no-confusing-arrow: 0 */
class JobsView extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      showModal: false,
      title: '',
      desc: '',
      isValidTitle: false,
    };
  }

  handleOpenModal = () => {
    this.setState(() => ({ showModal: true }));
  }

  handleSubmitJob = (e) => {
    e.preventDefault();
    if (this.state.title.length <= 0) {
      this.setState({ isValidTitle: false });
    }
  }

  handleCloseModal = () => {
    this.setState(() => ({ showModal: false }));
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
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
            <form id="jobForm" onSubmit={this.handleSubmitJob}>
              <FormGroup controlId="title" validationState={() => this.state.isValidTitle ? null : 'error'}>
                <ControlLabel>Title</ControlLabel>
                <FormControl
                  type="text"
                  name="title"
                  value={this.state.title}
                  componentClass="input"
                  placeholder="Job title"
                  onChange={this.handleInputChange}
                />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup controlId="desc">
                <ControlLabel>Description</ControlLabel>
                <FormControl
                  type="text"
                  name="desc"
                  value={this.state.desc}
                  componentClass="textarea"
                  placeholder="Job description"
                  onChange={this.handleInputChange}
                />
                <FormControl.Feedback />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Preview</ControlLabel>
                <FormControl
                  type="file"
                  name="mediaUrl"
                  inputRef={(ref) => { this.jobMediaRef = ref; }}
                  accept="audio/*,video/*,image/*"
                  componentClass="input"
                  placeholder="Media type"
                />
                <FormControl.Feedback />
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
