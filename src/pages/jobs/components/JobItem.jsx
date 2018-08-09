import React from 'react';
import PropTypes from 'prop-types';
import { Glyphicon, ButtonToolbar, Button } from 'react-bootstrap';

import convertTimeStampToDate from '../../../utils/dateTimeUtils';
import PreviewMedia from './PreviewMdia';

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
      <tr>
        <td>{job.title}</td>
        <td>{job.description}</td>
        <td>{convertTimeStampToDate(job.createdAt)}</td>
        <td>
          <PreviewMedia mediaUrl={job.mediaFile} />
        </td>
        <td className="w10">
          <ButtonToolbar className="pull-right">
            <Button className="btn btn-default" onClick={this.update}>
              <Glyphicon glyph="pencil" />
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
  job: PropTypes.instanceOf(Object).isRequired,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
};

JobItem.defaultProps = {
  onDelete: () => {},
  onUpdate: () => {},
};

export default JobItem;
