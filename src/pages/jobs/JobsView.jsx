import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Panel } from 'react-bootstrap';

import './job.css';
import JobAction from './components/JobActions';
import JobList from './components/JobList';
import Pagination from './components/Pagination';
import JobModal from './JobModal';

const emptyJob = {
  title: '',
  desc: '',
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
    const { jobs, onSearch, handleRemoveJob } = this.props;
    return (
      <Grid>
        <Row className="show-grid">
          <Panel>
            <Panel.Heading>
              <JobAction
                onOpenModal={this.handleOpenModal}
                onSearch={onSearch}
              />
            </Panel.Heading>
            <Panel.Body>
              <JobList
                removeJob={handleRemoveJob}
                jobs={jobs || []}
                updateJob={this.handleUpdateJob}
              />
            </Panel.Body>
            <Panel.Footer>
              <Pagination total={jobs.length} />
            </Panel.Footer>
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
  onSearch: PropTypes.func,
};

JobsView.defaultProps = {
  handleRemoveJob: () => ({}),
  onSearch: () => ({}),
};

export default JobsView;
