import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import debounce from '../../../utils';
import { searchJob } from '../actions';
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
    const { handleChange, values } = this.props;
    return (
      <FormGroup controlId="formInlineName">
        <Input
          name="criteria"
          value={values.criteria}
          onKeyUp={this.onKeyUp}
          onChange={handleChange}
          type="text"
          placeholder="Enter to search immediately"
        />
      </FormGroup>
    );
  }
}

SearchForm.propTypes = {
  onSearchJob: PropTypes.func.isRequired,
  /*
  * Formik props
  * */
  values: PropTypes.instanceOf(Object).isRequired,
  handleChange: PropTypes.func.isRequired,
};

const enhanceSearchForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({ criteria: '' }),
  displayName: 'searchJob',
})(SearchForm);

const mapStateToProps = createStructuredSelector({
  jobs: filterSelector(),
});

const mapDispatchToProps = dispatch => ({
  onSearchJob: criteria => dispatch(searchJob(criteria)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(enhanceSearchForm);
