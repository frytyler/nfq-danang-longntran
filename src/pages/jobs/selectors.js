import { createSelector } from 'reselect';

const selectJobs = state => state.get('jobs');

const jobsSelector = () => createSelector(
  selectJobs,
  state => state.get('jobs'),
);

export {
  selectJobs,
  jobsSelector,
};
