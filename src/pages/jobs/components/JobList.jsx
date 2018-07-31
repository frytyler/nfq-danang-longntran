import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

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
    <Table className="table-align--middle" responsive hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Created date</th>
          <th>Preview</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        {jobsView}
      </tbody>
    </Table>
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
