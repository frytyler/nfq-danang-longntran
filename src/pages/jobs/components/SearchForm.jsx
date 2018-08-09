import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { FormGroup, FormControl, Button, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import debounce from '../../../utils';
import { createJobAutomatically, searchJob } from '../actions';
import { filterSelector } from '../selectors';

class SearchForm extends React.PureComponent {
  onKeyUp = (event) => {
    const ENTER_CODE = 13;
    const { values, onSearchJob } = this.props;
    if (event.keyCode === ENTER_CODE) {
      return onSearchJob(values);
    }
    return debounce(() => onSearchJob(values), 1000);
  }

  render() {
    const {
      handleChange,
      handleSubmit,
      values,
      jobs,
    } = this.props;
    return (
      <div>
        <FormGroup controlId="formInlineName">
          <FormControl
            name="criteria"
            value={values.criteria}
            onKeyUp={this.onKeyUp}
            onChange={handleChange}
            bsSize="small"
            type="text"
            placeholder="Enter to search immediately"
          />
        </FormGroup>{' '}
        {jobs.length <= 0 && (
          <Fragment>
            <HelpBlock>Not found any matching, Create new once automatically.</HelpBlock>
            <Button bsStyle="info" onClick={handleSubmit} bsSize="small">Create</Button>
          </Fragment>
        )}
      </div>
    );
  }
}

SearchForm.propTypes = {
  jobs: PropTypes.instanceOf(Object),
  onSearchJob: PropTypes.func.isRequired,
  /*
  * Formik props
  * */
  values: PropTypes.instanceOf(Object).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

SearchForm.defaultProps = {
  jobs: [],
};

const enhanceSearchForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({ criteria: '' }),
  handleSubmit: (values, { props }) => {
    props.onCreateAutomatically();
  },
  displayName: 'searchJob',
})(SearchForm);

const mapStateToProps = createStructuredSelector({
  jobs: filterSelector(),
});

const mapDispatchToProps = dispatch => ({
  onSearchJob: criteria => dispatch(searchJob(criteria)),
  onCreateAutomatically: () => dispatch(createJobAutomatically()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(enhanceSearchForm);
