import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import JobsView from './JobsView';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';

import reducer from './reducer';
import saga from './saga';
import { usersSelector } from './selectors';
import { fetchJobs } from './actions';

class JobsContainer extends React.PureComponent {
  componentDidMount() {
    this.props.dispatchFetchJobs();
  }

  render() {
    return (
      <JobsView />
    );
  }
}

JobsContainer.propTypes = {
  dispatchFetchJobs: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  users: usersSelector(),
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchJobs: () => dispatch(fetchJobs()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'users', reducer });
const withSaga = injectSaga({ key: 'users', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(JobsContainer);
