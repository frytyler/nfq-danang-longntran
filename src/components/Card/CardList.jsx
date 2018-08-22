import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';

import CardItem from './CardItem';

const CardList = ({
  onRemove, items, onUpdate, onAddToList, isExist, onSelectFavorite,
}) => {
  const cardListView = items.map((item, key) => (
    <CardItem
      index={key + 1}
      key={item.key || item.nasa_id}
      data={item}
      onDelete={onRemove}
      onUpdate={onUpdate}
      onAdd={onAddToList}
      onSelectFavorite={onSelectFavorite}
      isExist={isExist}
    />
  ));

  return (
    <Row>
      {cardListView}
    </Row>
  );
};

CardList.propTypes = {
  items: PropTypes.instanceOf(Object).isRequired,
  onRemove: PropTypes.func,
  onUpdate: PropTypes.func,
  onAddToList: PropTypes.func,
  onSelectFavorite: PropTypes.func,
  isExist: PropTypes.bool,
};

CardList.defaultProps = {
  onRemove: () => {},
  onUpdate: () => {},
  onAddToList: () => {},
  onSelectFavorite: () => {},
  isExist: true,
};

export default CardList;
