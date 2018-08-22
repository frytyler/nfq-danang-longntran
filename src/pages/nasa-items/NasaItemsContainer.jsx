import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from './../../utils/injectReducer';
import injectSaga from './../../utils/injectSaga';
import { filterSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';

import { saveItem, removeItem, updateItem, nasaFilterAction } from './actions';
import NasaItemsView from './NasaItemsView';
import { context } from './constants';

export class NasaItemsContainer extends React.PureComponent {
  onSaveItem = (item) => {
    const { dispatchUpdateItem, dispatchSaveItem } = this.props;
    return item.key ? dispatchUpdateItem(item) : dispatchSaveItem(item);
  }

  handleRemoveItem = (item) => {
    this.props.dispatchRemoveItem(item.key);
  }

  addToFavorites = (item) => {
    const newItem = item;
    newItem.isFavorite = !item.isFavorite;
    this.props.dispatchUpdateItem(newItem);
  }

  executeSearch = (criteria) => {
    this.props.dispatchSearch(criteria);
  }

  render() {
    return (
      <NasaItemsView
        items={this.props.items}
        onSubmit={this.onSaveItem}
        onRemove={this.handleRemoveItem}
        onSearch={this.executeSearch}
        onAddToFavorites={this.addToFavorites}
      />
    );
  }
}

NasaItemsContainer.propTypes = {
  items: PropTypes.instanceOf(Object).isRequired,
  dispatchSaveItem: PropTypes.func.isRequired,
  dispatchUpdateItem: PropTypes.func.isRequired,
  dispatchRemoveItem: PropTypes.func.isRequired,
  dispatchSearch: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  dispatchSaveItem: item => dispatch(saveItem(item)),
  dispatchUpdateItem: item => dispatch(updateItem(item)),
  dispatchRemoveItem: item => dispatch(removeItem(item)),
  dispatchSearch: criteria => dispatch(nasaFilterAction.request(criteria)),
});

const mapStateToProps = createStructuredSelector({
  items: filterSelector(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: context, reducer });
const withSaga = injectSaga({ key: context, saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NasaItemsContainer);
