import { createSelector } from 'reselect';

const selectUsers = state => state.get('jobs');

const usersSelector = () => createSelector(
  selectUsers,
  usersState => usersState,
);

export {
  selectUsers,
  usersSelector,
};
