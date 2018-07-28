import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Panel, Pagination } from 'react-bootstrap';

import './job.css';

import JobAction from './components/JobActions';
import JobList from './components/JobList';
import JobModal from './job/CreateModal';

/* eslint no-confusing-arrow: 0 */
class JobsView extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }

  onCreateNewJob = (job) => {
    this.props.onSubmit(job);
    this.handleCloseModal();
  }

  handleOpenModal = () => {
    this.setState(() => ({ showModal: true }));
  }

  handleCloseModal = () => {
    this.setState(() => ({ showModal: false }));
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  renderPaginationView = () => {
    const items = [];
    for (let number = 1; number <= 10; number += 1) {
      items.push(<Pagination.Item key={number} active={false}>{number}</Pagination.Item>);
    }
    return items;
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Panel>
            <Panel.Heading>
              <JobAction onOpenModal={this.handleOpenModal} />
            </Panel.Heading>
            <Panel.Body>
              <JobList
                removeJob={this.props.handleRemoveJob}
                jobs={this.props.jobs || []}
                updateJob={() => {}}
              />
            </Panel.Body>
            <Panel.Footer>
              <Row className="show-grid">
                <Col xs={4} md={4} className="vcenter">
                  <div>Page 1 of 5</div>
                </Col>
                <Col xs={8} md={8} className="vcenter">
                  <Pagination className="m-0 pull-right" bsSize="medium">{this.renderPaginationView()}</Pagination>
                </Col>
              </Row>
            </Panel.Footer>
          </Panel>
          <JobModal
            active={this.state.showModal}
            onSubmit={this.onCreateNewJob}
            handleCloseModal={this.handleCloseModal}
            job={{}}
          />
        </Row>
      </Grid>
    );
  }
}

JobsView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  jobs: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]).isRequired,
  handleRemoveJob: PropTypes.func,
};

JobsView.defaultProps = {
  handleRemoveJob: () => ({}),
};

export default JobsView;
