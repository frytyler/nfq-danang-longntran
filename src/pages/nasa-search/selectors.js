import { createSelector } from 'reselect';
import { context } from './constants';

const getItems = state => state.get(context).items;
const getCriteria = state => state.get(context).criteria;
const itemsSelector = () => createSelector(
  getItems,
  getCriteria,
  (items, criteria) => (criteria.length === 0 ? [] : items),
);

export {
  getItems,
  getCriteria,
  itemsSelector,
};
