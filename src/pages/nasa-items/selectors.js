import { createSelector } from 'reselect';
import { context } from './constants';

const getJobs = state => state.get(context).jobs;
const getCriteria = state => state.get(context).criteria;
const filterSelector = () => createSelector(
  getJobs,
  getCriteria,
  (jobs, criteria) => {
    if (criteria === '' || criteria.length <= 0) {
      return jobs;
    }

    return jobs.filter((job) => {
      const { title = '', desc = '' } = job;
      return title.includes(criteria) || desc.includes(criteria);
    });
  },
);

export {
  getJobs,
  getCriteria,
  filterSelector,
};
