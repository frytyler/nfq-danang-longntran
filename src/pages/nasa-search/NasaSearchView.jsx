import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import CardList from '../../components/Card/CardList';

class NasaSearchView extends React.PureComponent {
  render() {
    const { items, addToListItem } = this.props;
    if (isEmpty(items)) {
      return <div>Not found</div>;
    }

    return (
      <CardList
        items={items}
        onAddToList={addToListItem}
        isExist={false}
      />
    );
  }
}

NasaSearchView.propTypes = {
  items: PropTypes.instanceOf(Object).isRequired,
  addToListItem: PropTypes.func.isRequired,
};

export default NasaSearchView;
