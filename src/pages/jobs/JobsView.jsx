import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Panel } from 'react-bootstrap';

import './job.css';
import JobAction from './components/JobActions';
import JobList from './components/JobList';
import JobModal from './JobModal';

const emptyJob = {
  title: '',
  description: '',
  mediaFile: '',
};

class JobsView extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      showModal: false,
      job: emptyJob,
    };
  }

  onSaveJob = (job) => {
    this.props.onSubmit(job);
    this.handleCloseModal();
  }

  handleOpenModal = () => {
    this.setState(() => ({ showModal: true, job: emptyJob }));
  }

  handleCloseModal = () => {
    this.setState(() => ({ showModal: false, job: emptyJob }));
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleUpdateJob = (job) => {
    this.setState(() => ({
      job,
      showModal: true,
    }));
  }

  render() {
    const { jobs, handleRemoveJob } = this.props;
    return (
      <Grid>
        <Row className="show-grid">
          <Panel>
            <Panel.Heading>
              <JobAction onOpenModal={this.handleOpenModal} />
            </Panel.Heading>
            <Panel.Body>
              <JobList
                removeJob={handleRemoveJob}
                jobs={jobs || []}
                updateJob={this.handleUpdateJob}
              />
            </Panel.Body>
          </Panel>
          <JobModal
            active={this.state.showModal}
            onSubmit={this.onSaveJob}
            handleCloseModal={this.handleCloseModal}
            job={this.state.job}
          />
        </Row>
      </Grid>
    );
  }
}

JobsView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  jobs: PropTypes.instanceOf(Object).isRequired,
  handleRemoveJob: PropTypes.func,
};

JobsView.defaultProps = {
  handleRemoveJob: () => {},
};

export default JobsView;
