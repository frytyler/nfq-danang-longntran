import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';

import itemValidation from '../validation';
import Input from '../../../components/From/Input';
import TextArea from '../../../components/From/Textarea';

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
      <form id="save-item-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="title">Title</label>
          <Input
            type="Text"
            name="title"
            value={values.title || ''}
            placeholder="Item title"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.title && errors.title && <span className="text-danger">{errors.title}</span>}
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="description">Description</label>
          <TextArea
            name="description"
            value={values.description || ''}
            rows={5}
            placeholder="Item description"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="mediaFile">Preview</label>
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
        </div>
      </form>
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
