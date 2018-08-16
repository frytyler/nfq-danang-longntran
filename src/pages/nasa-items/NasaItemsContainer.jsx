import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from './../../utils/injectReducer';
import injectSaga from './../../utils/injectSaga';
import { filterSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';

import { saveJob, removeJob, searchJob, updateJob } from './actions';
import NasaItemsView from './NasaItemsView';

export class NasaItemsContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  onSaveJob = (job) => {
    const { dispatchUpdateJob, dispatchSaveJob } = this.props;
    return job.key ? dispatchUpdateJob(job) : dispatchSaveJob(job);
  }

  onRemoveJob = (job) => {
    this.props.dispatchRemoveJob(job);
  }

  onSearchJob = (criteria) => {
    this.props.dispatchSearchJob(criteria);
  }

  render() {
    return (
      <NasaItemsView
        show={this.state.show}
        onSubmit={this.onSaveJob}
        jobs={this.props.jobs}
        handleRemoveJob={this.onRemoveJob}
        handleSearchJob={this.onSearchJob}
      />
    );
  }
}

NasaItemsContainer.propTypes = {
  jobs: PropTypes.instanceOf(Object),
  dispatchSaveJob: PropTypes.func.isRequired,
  dispatchUpdateJob: PropTypes.func.isRequired,
  dispatchRemoveJob: PropTypes.func.isRequired,
  dispatchSearchJob: PropTypes.func.isRequired,
};

NasaItemsContainer.defaultProps = {
  jobs: {},
};

const mapDispatchToProps = dispatch => ({
  dispatchSaveJob: job => dispatch(saveJob(job)),
  dispatchUpdateJob: job => dispatch(updateJob(job)),
  dispatchRemoveJob: job => dispatch(removeJob(job)),
  dispatchSearchJob: criteria => dispatch(searchJob(criteria)),
});

const mapStateToProps = createStructuredSelector({
  jobs: filterSelector(),
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
)(NasaItemsContainer);
