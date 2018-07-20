import { createSelector } from 'reselect';

const selectUsers = state => state.get('users');

const usersSelector = () => createSelector(
  selectUsers,
  usersState => usersState.get('users'),
);

export {
  selectUsers,
  usersSelector,
};
