import { createSelector } from 'reselect';
import { context } from './constants';

const getData = state => state.get(context).data;
const getCriteria = state => state.get(context).criteria;
const itemsSelector = () =>
  createSelector(getData, getCriteria, items => items);

export { getData, getCriteria, itemsSelector };
