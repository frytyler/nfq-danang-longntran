import { createSelector } from 'reselect';

const selectJobs = state => state.get('jobs').jobs;

const getCriteria = state => state.get('jobs').criteria;

const jobsSelector = () => createSelector(
  selectJobs,
  getCriteria,
  (jobs, criteria) => {
    if (criteria === '' || criteria.length <= 0) {
      return jobs;
    }

    return jobs.filter((job) => {
      const { title = '', desc = '' } = job.toJS();
      return title.includes(criteria) || desc.includes(criteria);
    });
  },
);

export {
  selectJobs,
  jobsSelector,
};
