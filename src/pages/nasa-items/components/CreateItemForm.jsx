import React from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, FormGroup } from 'reactstrap';
import { withFormik } from 'formik';

import itemValidation from '../validation';

class CreateItemForm extends React.PureComponent {
  render() {
    const {
      handleChange,
      handleBlur,
      values,
      handleSubmit,
      touched,
      errors,
      setFieldValue,
    } = this.props;

    return (
      <Form id="save-item-form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Title</Label>
          <Input
            type="text"
            name="title"
            value={values.title || ''}
            placeholder="Item title"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.title && errors.title && <span className="text-danger">{errors.title}</span>}
        </FormGroup>
        <FormGroup>
          <Label>Description</Label>
          <Input
            name="description"
            value={values.description || ''}
            type="textarea"
            placeholder="Item description"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormGroup>
        <FormGroup>
          <Label>Preview</Label>
          <Input
            type="file"
            name="mediaFile"
            onChange={(event) => {
              setFieldValue('mediaFile', event.currentTarget.files[0]);
            }}
            accept="audio/*,video/*,image/*"
            placeholder="Media file"
          />
          {touched.mediaFile && errors.mediaFile && <span className="text-danger">{errors.mediaFile}</span>}
        </FormGroup>
      </Form>
    );
  }
}

CreateItemForm.propTypes = {
  /* eslint-disable */
  item: PropTypes.instanceOf(Object).isRequired,
  /*
  * Formik props
  * */
  values: PropTypes.instanceOf(Object).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  touched: PropTypes.instanceOf(Object).isRequired,
  errors: PropTypes.instanceOf(Object).isRequired,
};

const enhanceSaveItemForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: props => props.item,
  validate: itemValidation,
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    const item = Object.assign({}, props.item, values);
    props.onSubmit(item);
    resetForm({});
    setSubmitting(false);
  },
  displayName: 'SaveItemForm',
})(CreateItemForm);

export default enhanceSaveItemForm;
