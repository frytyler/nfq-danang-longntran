import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import UsersView from './UsersView';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';

import reducer from './reducer';
import saga from './saga';
import { usersSelector } from './selectors';
import { fetchUsers } from './actions';

class UsersContainer extends React.PureComponent {
  componentDidMount() {
    this.props.dispatchFetchUsers();
  }

  render() {
    return (
      <UsersView />
    );
  }
}

UsersContainer.propTypes = {
  dispatchFetchUsers: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  users: usersSelector(),
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchUsers: () => dispatch(fetchUsers()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'users', reducer });
const withSaga = injectSaga({ key: 'users', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UsersContainer);
