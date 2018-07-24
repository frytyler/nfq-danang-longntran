import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from './../../utils/injectReducer';
import injectSaga from './../../utils/injectSaga';

import { fetchJobs } from './actions';
import JobsView from './JobsView';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class JobsContainer extends React.PureComponent {
  componentDidMount() {
    this.props.dispatchFetchJobs();
    console.log(this.props.jobs);
  }

  render() {
    return (
      <JobsView />
    );
  }
}

JobsContainer.propTypes = {
  jobs: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  dispatchFetchJobs: PropTypes.func,
};

JobsContainer.defaultProps = {
  jobs: false,
  dispatchFetchJobs: () => {},
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchJobs: () => dispatch(fetchJobs()),
  };
}

const mapStateToProps = createStructuredSelector({
  jobs: () => ([]),
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
