import React from 'react';
import PropTypes from 'prop-types';
import { Col, CardImg, CardBody, CardTitle,
  CardSubtitle, Button, CardFooter } from 'reactstrap';

import { CardTextEllipsis, FullHeightCard } from './JobItem.style';
import convertTimeStampToDate from '../../../utils/dateTimeUtils';

class JobItem extends React.PureComponent {
  update = () => {
    this.props.onUpdate(this.props.job);
  }

  remove = () => {
    this.props.onDelete(this.props.job);
  }

  render() {
    const { job } = this.props;
    return (
      <Col sm="4">
        <FullHeightCard>
          <CardImg top width="100%" src={job.mediaFile} alt="Card image cap" />
          <CardBody>
            <CardTitle>{job.title}</CardTitle>
            <CardSubtitle>{convertTimeStampToDate(job.createdAt)}</CardSubtitle>
            <CardTextEllipsis>{job.description}</CardTextEllipsis>
          </CardBody>
          <CardFooter className="text-muted">
            <Button onClick={this.update}>Edit</Button>
            <Button color="danger" onClick={this.remove}>Delete</Button>
          </CardFooter>
        </FullHeightCard>
      </Col>
    );
  }
}

JobItem.propTypes = {
  job: PropTypes.instanceOf(Object).isRequired,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
};

JobItem.defaultProps = {
  onDelete: () => {},
  onUpdate: () => {},
};

export default JobItem;
