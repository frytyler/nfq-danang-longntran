import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik/dist/index';
import { FormControl } from 'react-bootstrap';

import debounce from '../../../utils';

class SearchForm extends React.PureComponent {
  handleKeyUp = (event) => {
    const ENTER_CODE = 13;
    const { values, onSearch } = this.props;
    if (event.keyCode === ENTER_CODE) {
      return onSearch(values);
    }
    return debounce(() => onSearch(values), 1000);
  }

  render() {
    const {
      handleChange,
      values,
    } = this.props;
    return (
      <FormControl
        name="criteria"
        value={values.criteria}
        onKeyUp={this.handleKeyUp}
        onChange={handleChange}
        bsSize="small"
        type="text"
        placeholder="Search"
      />
    );
  }
}

SearchForm.propTypes = {
  values: PropTypes.instanceOf(Object).isRequired,
  handleChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func,
};

SearchForm.defaultProps = {
  onSearch: () => {},
};

const JobSearchForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({ criteria: '' }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(values);
    setSubmitting(false);
  },
  displayName: 'jobSearchForm',
})(SearchForm);

export default JobSearchForm;
