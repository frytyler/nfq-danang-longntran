import { createSelector } from 'reselect';

const selectUsers = state => state.get('users');

const usersSelector = () => createSelector(
  selectUsers,
  usersState => usersState,
);

export {
  selectUsers,
  usersSelector,
};
