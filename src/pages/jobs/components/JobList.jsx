import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';

import JobItem from './JobItem';

const JobList = ({ removeJob, jobs, updateJob }) => {
  const jobsView = jobs.map((job, key) => (
    <JobItem
      index={key + 1}
      key={job.key}
      job={job}
      onDelete={removeJob}
      onUpdate={updateJob}
    />
  ));

  return (
    <Row>
      {jobsView}
    </Row>
  );
};

JobList.propTypes = {
  jobs: PropTypes.instanceOf(Object).isRequired,
  removeJob: PropTypes.func,
  updateJob: PropTypes.func,
};

JobList.defaultProps = {
  removeJob: () => ({}),
  updateJob: () => ({}),
};

export default JobList;
