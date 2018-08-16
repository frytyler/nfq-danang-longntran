import React from 'react';
import PropTypes from 'prop-types';
import CardList from '../../components/Card/CardList';

class NasaSearchView extends React.PureComponent {
  render() {
    const { jobs, onCreate } = this.props;
    return (
      <CardList
        jobs={jobs}
        onCreate={onCreate}
        isExist={false}
      />
    );
  }
}

NasaSearchView.propTypes = {
  jobs: PropTypes.instanceOf(Object).isRequired,
  onCreate: PropTypes.func.isRequired,
};

export default NasaSearchView;
