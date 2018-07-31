import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from './../../utils/injectReducer';
import injectSaga from './../../utils/injectSaga';
import { jobsSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';

import { saveJob, removeJob, updateJob, searchJob } from './actions';
import JobsView from './JobsView';

export class JobsContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  onSaveJob = (job) => {
    if (job.key) {
      this.props.dispatchUpdateJob(job);
    } else {
      this.props.dispatchSaveJob(job);
    }
  }

  onRemoveJob = (job) => {
    this.props.dispatchRemoveJob(job);
  }

  handleSearch = (criteria) => {
    this.props.dispatchSearchChange(criteria);
  }

  render() {
    return (
      <JobsView
        show={this.state.show}
        onSubmit={this.onSaveJob}
        jobs={this.props.jobs}
        handleRemoveJob={this.onRemoveJob}
        onSearch={this.handleSearch}
      />
    );
  }
}

JobsContainer.propTypes = {
  jobs: PropTypes.instanceOf(Object),
  dispatchSaveJob: PropTypes.func.isRequired,
  dispatchUpdateJob: PropTypes.func.isRequired,
  dispatchRemoveJob: PropTypes.func.isRequired,
  dispatchSearchChange: PropTypes.func.isRequired,
};

JobsContainer.defaultProps = {
  jobs: {},
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatchSaveJob: job => dispatch(saveJob(job)),
    dispatchUpdateJob: job => dispatch(updateJob(job)),
    dispatchRemoveJob: job => dispatch(removeJob(job)),
    dispatchSearchChange: criteria => dispatch(searchJob(criteria)),
  };
}

const mapStateToProps = createStructuredSelector({
  jobs: jobsSelector(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'jobs', reducer });
const withSaga = injectSaga({ key: 'jobs', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(JobsContainer);
