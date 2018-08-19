import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { FormGroup, Input } from 'reactstrap';

import debounce from '../../utils/index';

class SearchBox extends React.PureComponent {
  onKeyUp = (event) => {
    const ENTER_CODE = 13;
    const { values, onSearch } = this.props;
    if (event.keyCode === ENTER_CODE) {
      return onSearch(values);
    }
    return debounce(() => onSearch(values), 1000);
  }

  render() {
    const { handleChange, values } = this.props;
    return (
      <FormGroup>
        <Input
          aria-label="criteria"
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
