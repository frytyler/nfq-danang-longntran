/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Pagination as LibPagination } from 'react-bootstrap';

class Pagination extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activePage: props.active,
    };
  }

  onPageChange = (pageNumber) => {
    this.setState(() => ({
      activePage: pageNumber,
    }));
  }

  renderPaginationView = () => {
    const items = [];
    const { total } = this.props;
    for (let number = 1; number <= total; number += 1) {
      items.push(<LibPagination.Item
        key={number}
        active={number === this.state.activePage}
        onClick={() => this.onPageChange(number)}
      >{number}</LibPagination.Item>);
    }
    return items;
  }

  render() {
    const { activePage } = this.state;
    return (
      <Row className="show-grid">
        <Col xs={4} md={4} className="vcenter">
          <div>{`Page ${activePage} of ${this.props.total}`}</div>
        </Col>
        <Col xs={8} md={8} className="vcenter">
          <LibPagination className="m-0 pull-right" bsSize="medium">{this.renderPaginationView()}</LibPagination>
        </Col>
      </Row>
    );
  }
}

Pagination.propTypes = {
  total: PropTypes.number,
  active: PropTypes.number,
};

Pagination.defaultProps = {
  total: 0,
  active: 1,
};

export default Pagination;
