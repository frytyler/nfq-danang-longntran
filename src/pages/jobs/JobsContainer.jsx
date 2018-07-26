import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from './../../utils/injectReducer';
import injectSaga from './../../utils/injectSaga';

import { fetchJobs, saveJob } from './actions';
import JobsView from './JobsView';
import reducer from './reducer';
import saga from './saga';
import { jobsSelector } from './selectors';

/* eslint-disable react/prefer-stateless-function */
export class JobsContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    this.props.dispatchFetchJobs();
    console.log(this.props.jobs);
  }

  onSaveJob = (job) => {
    this.props.dispatchSaveJobs(job);
  }

  render() {
    return (
      <JobsView
        show={this.state.show}
        onSubmit={this.onSaveJob}
      />
    );
  }
}

JobsContainer.propTypes = {
  jobs: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  dispatchFetchJobs: PropTypes.func,
  dispatchSaveJobs: PropTypes.func,
};

JobsContainer.defaultProps = {
  jobs: false,
  dispatchFetchJobs: () => {},
  dispatchSaveJobs: () => {},
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchJobs: () => dispatch(fetchJobs()),
    dispatchSaveJobs: job => dispatch(saveJob(job)),
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
