import React from 'react';
import PropTypes from 'prop-types';

import convertTimeStampToDate from '../../utils/dateTimeUtils';
import Button from '../Button';

import {
  Main,
  Header,
  Body,
  Title,
  Meta,
  Content,
  Actions,
  List,
  Item,
  IconButton,
  Icon,
  Center,
} from './CardItem.styled';

class CardItem extends React.PureComponent {
  getFavoriteClass = () => {
    const {
      data: { isFavorite = false },
    } = this.props;
    if (isFavorite) {
      return 'icon-heart text-danger';
    }
    return 'icon-heart';
  };

  update = () => {
    this.props.onUpdate(this.props.data);
  };

  remove = () => {
    this.props.onDelete(this.props.data);
  };

  addToList = () => {
    this.props.onAdd(this.props.data);
  };

  addFavorite = () => {
    this.props.onSelectFavorite(this.props.data);
  };

  renderCardFooter = () => {
    const { isExist, isFavorite } = this.props;
    if (isExist) {
      return (
        <List>
          <Item>
            <IconButton onClick={this.addFavorite}>
              <Icon isFavorite={isFavorite} name="heart" />
            </IconButton>
          </Item>
          <Item>
            <IconButton onClick={this.update}>
              <Icon name="pencil" />
            </IconButton>
          </Item>
          <Item last>
            <IconButton onClick={this.remove}>
              <Icon name="bin" />
            </IconButton>
          </Item>
        </List>
      );
    }
    return (
      <Center>
        <Button
          noBorder
          style={{ backgroundColor: 'transparent' }}
          onClick={this.addToList}
        >
          <Icon name="plus" />
          {' Add to list'}
        </Button>
      </Center>
    );
  };

  render() {
    const {
      data: { mediaFile, title, createdAt, description, className },
    } = this.props;
    return (
      <Main className={className}>
        <Header src={mediaFile} alt={title} />
        <Body>
          <Title>{title}</Title>
          <Meta>{convertTimeStampToDate(createdAt)}</Meta>
          <Content>{description}</Content>
        </Body>
        <Actions>{this.renderCardFooter()}</Actions>
      </Main>
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
  isFavorite: PropTypes.bool,
};

CardItem.defaultProps = {
  onDelete: () => {},
  onUpdate: () => {},
  onAdd: () => {},
  onSelectFavorite: () => {},
  isExist: true,
  isFavorite: false,
};

export default CardItem;
