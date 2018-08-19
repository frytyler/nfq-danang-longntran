import React from 'react';
import PropTypes from 'prop-types';
import { Col, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import convertTimeStampToDate from '../../utils/dateTimeUtils';
import {
  CardTextEllipsis,
  FullHeightCard,
  CardFooterWrapper,
  ListGroupItemWrapper,
} from './CardItem.style';

class CardItem extends React.PureComponent {
  update = () => {
    this.props.onUpdate(this.props.data);
  }

  remove = () => {
    this.props.onDelete(this.props.data);
  }

  create = () => {
    this.props.onCreate(this.props.data);
  }

  renderCardFooter = () => {
    const { isExist } = this.props;
    if (isExist) {
      return (
        <div className="list-group flex-row list-group-flush">
          <ListGroupItemWrapper className="text-primary" tag="button" action onClick={this.update}>
            Edit
          </ListGroupItemWrapper>
          <ListGroupItemWrapper className="border-top-0 text-danger" tag="button" action onClick={this.remove}>
            Delete
          </ListGroupItemWrapper>
        </div>
      );
    }
    return (
      <div className="list-group list-group-flush">
        <ListGroupItemWrapper className="text-primary" tag="button" action onClick={this.create}>
          Add to list
        </ListGroupItemWrapper>
      </div>
    );
  }

  render() {
    const {
      data: {
        mediaFile, title, createdAt, description,
      },
    } = this.props;
    return (
      <Col sm="4" className="mb-3">
        <FullHeightCard>
          <CardImg width="100%" src={mediaFile} alt={title} />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle className="text-muted">{convertTimeStampToDate(createdAt)}</CardSubtitle>
            <CardTextEllipsis>{description}</CardTextEllipsis>
          </CardBody>
          <CardFooterWrapper>
            {this.renderCardFooter()}
          </CardFooterWrapper>
        </FullHeightCard>
      </Col>
    );
  }
}

CardItem.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  onCreate: PropTypes.func,
  isExist: PropTypes.bool,
};

CardItem.defaultProps = {
  onDelete: () => {},
  onUpdate: () => {},
  onCreate: () => {},
  isExist: true,
};

export default CardItem;
