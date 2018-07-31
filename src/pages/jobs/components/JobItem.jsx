import React from 'react';
import PropTypes from 'prop-types';
import { Glyphicon, ButtonToolbar, Button, Image } from 'react-bootstrap';

function convertTimeStampToDate(timestamp) {
  return new Date(timestamp || new Date().getTime()).toLocaleDateString();
}

class JobItem extends React.PureComponent {
  update = () => {
    this.props.onUpdate(this.props.job.toJS());
  }

  remove = () => {
    this.props.onDelete(this.props.job);
  }

  renderImage = src => <div className="job__thumb"><Image thumbnail src={src} /></div>;

  render() {
    const { index, job } = this.props;
    return (
      <tr>
        <td>{index}</td>
        <td>{job.title}</td>
        <td>{job.desc}</td>
        <td>{convertTimeStampToDate(job.createdAt)}</td>
        <td>
          {this.renderImage(job.mediaFile || null)}
        </td>
        <td align="center">
          <ButtonToolbar className="pull-right">
            <Button className="btn btn-default" onClick={this.update}>
              <Glyphicon glyph="pencil" />
            </Button>
            <Button className="btn btn-primary">
              <Glyphicon glyph="download-alt" />
            </Button>
            <Button className="btn btn-danger" onClick={this.remove}>
              <Glyphicon glyph="trash" />
            </Button>
          </ButtonToolbar>
        </td>
      </tr>
    );
  }
}

JobItem.propTypes = {
  job: PropTypes.instanceOf(Object),
  index: PropTypes.number,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
};

JobItem.defaultProps = {
  job: {},
  index: 0,
  onDelete: () => {},
  onUpdate: () => {},
};

export default JobItem;
