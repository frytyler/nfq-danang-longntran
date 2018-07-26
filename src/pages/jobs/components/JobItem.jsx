import React from 'react';
import PropTypes from 'prop-types';
import { Glyphicon, ButtonToolbar, Button } from 'react-bootstrap';

const JobItem = ({ job, index }) => (
  <tr>
    <td>{index}</td>
    <td>{job.title}</td>
    <td>{job.desc}</td>
    <td>Otto</td>
    <td>@mdo</td>
    <td align="center">
      <ButtonToolbar className="pull-right">
        <Button className="btn btn-default">
          <Glyphicon glyph="pencil" />
        </Button>
        <Button className="btn btn-danger">
          <Glyphicon glyph="trash" />
        </Button>
      </ButtonToolbar>
    </td>
  </tr>
);

JobItem.propTypes = {
  job: PropTypes.instanceOf(Object),
  index: PropTypes.number,
};

JobItem.defaultProps = {
  job: {},
  index: 0,
};

export default JobItem;
