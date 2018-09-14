import React from 'react';
import PropTypes from 'prop-types';

import convertTimeStampToDate from '../../utils/dateTimeUtils';
import Button from '../Button';

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
        <ul className="list-items">
          <li className="list-items__item">
            <button onClick={this.addFavorite}>
              <span className={this.getFavoriteClass()} />
            </button>
          </li>
          <li className="list-items__item">
            <button onClick={this.update}>
              <span className="icon-pencil" />
            </button>
          </li>
          <li className="list-items__item">
            <button onClick={this.remove}>
              <span className="icon-bin" />
            </button>
          </li>
        </ul>
      );
    }
    return (
      <div className="text-center">
        <Button classes="btn btn-default no-border" style={{ backgroundColor: 'transparent' }} onClick={this.addToList}>
          <span className="icon-plus" />{' Add to list'}
        </Button>
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
      <div className="card-item">
        <img className="card-item__head" src={mediaFile} alt={title} />
        <div className="card-item__body">
          <h5 className="card-item__title">{title}</h5>
          <h6 className="card-item__title--meta">{convertTimeStampToDate(createdAt)}</h6>
          <div className="card-item__text">{description}</div>
        </div>
        <div className="card-item__actions">
          {this.renderCardFooter()}
        </div>
      </div>
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
