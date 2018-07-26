import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import JobItem from './JobItem';

const JobList = ({ removeJob, jobs, updateJob }) => {
  const jobsView = jobs.map((job, key) => (/* eslint react/no-array-index-key: 0 */
    <JobItem
      index={key + 1}
      removeTask={removeJob}
      key={key}
      job={job}
      updateTask={updateJob}
    />
  ));

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Created date</th>
          <th>Preview</th>
          <th>Download</th>
        </tr>
      </thead>
      <tbody>
        {jobsView}
      </tbody>
    </Table>
  );
};

JobList.propTypes = {
  removeJob: PropTypes.func.isRequired,
  jobs: PropTypes.instanceOf(Array).isRequired,
  updateJob: PropTypes.func.isRequired,
};

export default JobList;
