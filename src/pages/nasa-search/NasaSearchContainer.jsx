/* eslint-disable */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import injectReducer from './../../utils/injectReducer';
import injectSaga from './../../utils/injectSaga';
import { createItem, searchItems } from './actions';
import { itemsSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';

import SearchBox from '../../components/SearchBox';
import NasaSearchView from './NasaSearchView';

class NasaSearchContainer extends React.PureComponent {
  componentDidMount() {
	  const { match: { params } } = this.props;
	  if (isEmpty(params.criteria)) return;
    this.props.dispatchSearch(params.criteria);
  }

  handleSearch = ({ criteria }) => {
    this.props.history.push({
			pathname: `/nasa-search/criteria=${criteria}`,
    });
    this.props.dispatchSearch(criteria);
  }

  handleCreateItem = (item) => {
    this.props.dispatchCreate(item);
    this.props.history.push('/nasa-items');
  }

  render() {
    const { items } = this.props;
    return (
      <Fragment>
        <SearchBox onSearch={this.handleSearch} />
        <NasaSearchView
          jobs={items}
          onCreate={this.handleCreateItem}
        />
      </Fragment>
    );
  }
}

NasaSearchContainer.propTypes = {
  items: PropTypes.instanceOf(Object),
  dispatchSearch: PropTypes.func.isRequired,
	dispatchCreate: PropTypes.func.isRequired,
};

NasaSearchContainer.defaultProps = {
  items: {},
};

const mapStateToProps = createStructuredSelector({
  items: itemsSelector(),
});

const mapDispatchToProps = dispatch => ({
  dispatchSearch: criteria => dispatch(searchItems(criteria)),
	dispatchCreate: item => dispatch(createItem(item)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'nasa', reducer });
const withSaga = injectSaga({ key: 'nasa', saga });

export default compose(
  withRouter,
  withReducer,
  withSaga,
  withConnect,
)(NasaSearchContainer);
