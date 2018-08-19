import { createSelector } from 'reselect';
import { context } from './constants';

const getData = state => state.get(context).data;
const getCriteria = state => state.get(context).criteria;
const filterSelector = () => createSelector(
  getData,
  getCriteria,
  (data, criteria) => {
    if (criteria === '' || criteria.length <= 0) {
      return data;
    }

    return data.filter((item) => {
      const { title = '', desc = '' } = item;
      return title.includes(criteria) || desc.includes(criteria);
    });
  },
);

export {
  getData,
  getCriteria,
  filterSelector,
};
