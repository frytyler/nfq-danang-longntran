import React from 'react';
import PropTypes from 'prop-types';
import { Col, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import convertTimeStampToDate from '../../utils/dateTimeUtils';
import {
  CardTextEllipsis,
  FullHeightCard,
  CardFooterWrapper,
  ListGroupItemWrapper,
  CardImgWrapper,
} from './CardItem.style';

class CardItem extends React.PureComponent {
  getFavoriteClass = () => {
    const { data: { isFavorite = false } } = this.props;
    if (isFavorite) {
      return 'icon-heart text-danger';
    }
    return 'icon-heart';
  }

  update = () => {
    this.props.onUpdate(this.props.data);
  }

  remove = () => {
    this.props.onDelete(this.props.data);
  }

  addToList = () => {
    this.props.onAdd(this.props.data);
  }

  addFavorite = () => {
    this.props.onSelectFavorite(this.props.data);
  }

  renderCardFooter = () => {
    const { isExist } = this.props;
    if (isExist) {
      return (
        <ul className="list-group flex-row list-group-flush">
          <ListGroupItemWrapper onClick={this.addFavorite}>
            <span className={this.getFavoriteClass()} />
          </ListGroupItemWrapper>
          <ListGroupItemWrapper onClick={this.update}>
            <span className="icon-pencil" />
          </ListGroupItemWrapper>
          <ListGroupItemWrapper onClick={this.remove}>
            <span className="icon-bin" />
          </ListGroupItemWrapper>
        </ul>
      );
    }
    return (
      <div className="list-group list-group-flush">
        <ListGroupItemWrapper className="text-primary" onClick={this.addToList}>
          <span className="icon-plus" />{' Add to list'}
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
      <Col md="4" sm="6" className="mb-3">
        <FullHeightCard className="shadow-sm bg-white rounded">
          <CardImgWrapper width="100%" src={mediaFile} alt={title} />
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
  onAdd: PropTypes.func,
  onSelectFavorite: PropTypes.func,
  isExist: PropTypes.bool,
};

CardItem.defaultProps = {
  onDelete: () => {},
  onUpdate: () => {},
  onAdd: () => {},
  onSelectFavorite: () => {},
  isExist: true,
};

export default CardItem;
