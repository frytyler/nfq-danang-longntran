import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';

import CardItem from './CardItem';

const CardList = ({
  removeJob, jobs, updateJob, onCreate, isExist,
}) => {
  const cardListView = jobs.map((job, key) => (
    <CardItem
      index={key + 1}
      key={job.key || job.nasa_id}
      data={job}
      onDelete={removeJob}
      onUpdate={updateJob}
      onCreate={onCreate}
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
  jobs: PropTypes.instanceOf(Object).isRequired,
  removeJob: PropTypes.func,
  updateJob: PropTypes.func,
  onCreate: PropTypes.func,
  isExist: PropTypes.bool,
};

CardList.defaultProps = {
  removeJob: () => {},
  updateJob: () => {},
  onCreate: () => {},
  isExist: true,
};

export default CardList;
