import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import injectReducer from './../../utils/injectReducer';
import injectSaga from './../../utils/injectSaga';
import { createItem, nasaSearch } from './actions';
import { itemsSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';

import SearchBox from '../../components/SearchBox';
import { context } from './constants';
import CardList from '../../components/Card/CardList';

class NasaSearchContainer extends React.PureComponent {
  componentDidMount() {
    const {
      location: { search },
    } = this.props;
    if (isEmpty(search)) return;

    const querySegment = search.split('query=');
    const query = querySegment[querySegment.length - 1] || '';
    this.props.dispatchSearch(query);
  }

  handleSearch = ({ criteria }) => {
    this.props.history.push({
      pathname: '/nasa-search',
      search: `?query=${criteria}`,
    });
    this.props.dispatchSearch(criteria);
  };

  handleCreateItem = item => {
    this.props.dispatchCreate(item);
  };

  render() {
    return (
      <Fragment>
        <SearchBox onSearch={this.handleSearch} />
        {this.props.items && (
          <CardList
            items={this.props.items}
            onAddToList={this.handleCreateItem}
            isExist={false}
          />
        )}
      </Fragment>
    );
  }
}

NasaSearchContainer.propTypes = {
  items: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]).isRequired,
  dispatchSearch: PropTypes.func.isRequired,
  dispatchCreate: PropTypes.func.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = createStructuredSelector({
  items: itemsSelector(),
});

const mapDispatchToProps = dispatch => ({
  dispatchSearch: criteria => dispatch(nasaSearch.request(criteria)),
  dispatchCreate: item => dispatch(createItem(item)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: context, reducer });
const withSaga = injectSaga({ key: context, saga });

export default compose(
  withRouter,
  withReducer,
  withSaga,
  withConnect,
)(NasaSearchContainer);
