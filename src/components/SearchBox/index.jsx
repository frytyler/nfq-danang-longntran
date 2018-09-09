import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';

import Input from '../From/Input';

const ENTER_CODE = 13;

class SearchBox extends React.PureComponent {
  onKeyUp = (event) => {
    const { values, onSearch } = this.props;
    if (event.keyCode === ENTER_CODE) {
      return onSearch(values);
    }
    return null;
  }

  render() {
    const { handleChange, values } = this.props;
    return (
      <Input
        classes="form-input--lg"
        name="criteria"
        id="criteria"
        value={values.criteria}
        onKeyUp={this.onKeyUp}
        onChange={handleChange}
        type="text"
        placeholder="Enter to search immediately"
      />
    );
  }
}

SearchBox.propTypes = {
  onSearch: PropTypes.func,
  /*
  * Formik props
  * */
  values: PropTypes.instanceOf(Object).isRequired,
  handleChange: PropTypes.func.isRequired,
};

SearchBox.defaultProps = {
  onSearch: () => {},
};

const enhanceSearchForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({ criteria: '' }),
  displayName: 'SearchBox',
})(SearchBox);

export default enhanceSearchForm;
