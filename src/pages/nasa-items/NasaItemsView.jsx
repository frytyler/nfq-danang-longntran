import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import CardList from '../../components/Card/CardList';
import JobAction from './components/JobActions';
import JobModal from './NasaItemModal';

const emptyJob = {
  title: '',
  description: '',
  mediaFile: '',
};

class NasaItemsView extends React.PureComponent {
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
    const { jobs, handleRemoveJob, handleSearchJob } = this.props;
    return (
      <Fragment>
        <JobAction
          onSearch={handleSearchJob}
          onOpenModal={this.handleOpenModal}
        />
        <CardList
          removeJob={handleRemoveJob}
          jobs={jobs || []}
          updateJob={this.handleUpdateJob}
        />
        <JobModal
          active={this.state.showModal}
          onSubmit={this.onSaveJob}
          handleCloseModal={this.handleCloseModal}
          job={this.state.job}
        />
      </Fragment>
    );
  }
}

NasaItemsView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  jobs: PropTypes.instanceOf(Object).isRequired,
  handleRemoveJob: PropTypes.func,
  handleSearchJob: PropTypes.func,
};

NasaItemsView.defaultProps = {
  handleRemoveJob: () => {},
  handleSearchJob: () => {},
};

export default NasaItemsView;
