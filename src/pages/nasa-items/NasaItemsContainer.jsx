import React, { Fragment } from 'react';
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
import { context } from './constants';
import ActionBar from './components/ActionBar';
import CardList from '../../components/Card/CardList';
import NasaModal from './../../components/NasaModal';
import CreateForm from './components/CreateItemForm';
import Button from '../../components/Button';

/* eslint-disable */
export class NasaItemsContainer extends React.PureComponent {
  initialState = {
    item: {
      title: '',
      description: '',
    },
    activeModal: false,
  }
  state = this.initialState

  onSaveItem = (item) => {
    const { dispatchUpdateItem, dispatchSaveItem } = this.props;
    item.key ? dispatchUpdateItem(item) : dispatchSaveItem(item);
    this.resetState();
  }

  resetState = () =>
    this.setState(this.initialState)

  toggleModal = () =>
    this.setState(({ activeModal }) => ({ activeModal: !activeModal }))

  handleRemoveItem = (item) => {
    this.props.dispatchRemoveItem(item.key);
  }

  addToFavorites = (item) => {
    const newItem = item;
    newItem.isFavorite = !item.isFavorite;
    this.props.dispatchUpdateItem(newItem);
  }

  executeSearch = criteria => this.props.dispatchSearch(criteria);

  updateItem = item =>
    this.setState(() => ({ item }), () => this.toggleModal())

  createNewItem = () =>
    this.setState(
      () => this.initialState,
      () => this.toggleModal(),
    )

  isEditing = () => this.state.item && this.state.item.key;

  renderModalTitle = () => {
    if (this.isEditing()) {
      return 'Update item';
    }
    return 'Create new item';
  }

  render() {
    const { items } = this.props;
    return (
      <Fragment>
        <ActionBar
          onOpenModal={this.createNewItem}
          onSearch={this.executeSearch}
        />
        <CardList
          items={items || []}
          onRemove={this.handleRemoveItem}
          onUpdate={this.updateItem}
          onSelectFavorite={this.addToFavorites}
        />
        <NasaModal
          initialOn={this.state.activeModal}
          onToggleModal={this.toggleModal}
        >
          {() => (
            <Fragment>
              <h2>{this.renderModalTitle()}</h2>
              <CreateForm
                item={this.state.item}
                onSubmit={this.onSaveItem}
              />
              <div className="modal-footer">
                <div>
                  <Button
                    name="save"
                    classes="btn-primary"
                    type="submit"
                    form="save-item-form"
                  >
                    Save
                  </Button>
                  <Button
                    name="close"
                    type="button"
                    color="secondary"
                    onClick={this.toggleModal}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </Fragment>
          )}
        </NasaModal>
      </Fragment>
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
