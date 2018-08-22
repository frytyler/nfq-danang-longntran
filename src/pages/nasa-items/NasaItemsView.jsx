import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import CardList from '../../components/Card/CardList';
import ActionBar from './components/ActionBar';
import NasaModal from './NasaItemModal';

const emptyItem = {
  title: '',
  description: '',
  mediaFile: '',
};

class NasaItemsView extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      showModal: false,
      item: emptyItem,
    };
  }

  onSave = (item) => {
    this.props.onSubmit(item);
    this.handleCloseModal();
  }

  onShowModal = () => {
    this.setState(() => ({ showModal: true, item: emptyItem }));
  }

  handleCloseModal = () => {
    this.setState(() => ({ showModal: false, item: emptyItem }));
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleUpdate = (item) => {
    this.setState(() => ({ item, showModal: true }));
  }

  render() {
    const {
      items, onRemove, onSearch, onAddToFavorites,
    } = this.props;
    return (
      <Fragment>
        <ActionBar
          onSearch={onSearch}
          onOpenModal={this.onShowModal}
        />
        <CardList
          items={items || []}
          onRemove={onRemove}
          onUpdate={this.handleUpdate}
          onSelectFavorite={onAddToFavorites}
        />
        <NasaModal
          item={this.state.item}
          active={this.state.showModal}
          onSubmit={this.onSave}
          handleCloseModal={this.handleCloseModal}
        />
      </Fragment>
    );
  }
}

NasaItemsView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  items: PropTypes.instanceOf(Object).isRequired,
  onRemove: PropTypes.func,
  onSearch: PropTypes.func,
  onAddToFavorites: PropTypes.func,
};

NasaItemsView.defaultProps = {
  onRemove: () => {},
  onSearch: () => {},
  onAddToFavorites: () => {},
};

export default NasaItemsView;
