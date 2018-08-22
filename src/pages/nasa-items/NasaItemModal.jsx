import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input, FormGroup } from 'reactstrap';
import { withFormik } from 'formik';

import validate from './validation';

class NasaItemModal extends React.PureComponent {
  isEditing = () => this.props.item && this.props.item.key;

  renderModalTitle = () => {
    if (this.isEditing()) {
      return 'Update item';
    }
    return 'Create new item';
  }

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
      <Modal size="lg" isOpen={this.props.active} toggle={this.props.handleCloseModal}>
        <ModalHeader>
          {this.renderModalTitle()}
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                value={values.title}
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
                value={values.description}
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
              {errors.mediaFile && <span className="text-danger">{errors.mediaFile}</span>}
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            disabled={this.props.isSubmitting}
            color="primary"
            key="submit"
            type="submit"
            onClick={handleSubmit}
          >
            {this.isEditing() ? 'Save' : 'Create'}
          </Button>
          <Button
            onClick={this.props.handleCloseModal}
            color="secondary"
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

NasaItemModal.propTypes = {
  active: PropTypes.bool,
  item: PropTypes.instanceOf(Object).isRequired,
  /*
  * Formik props
  * */
  values: PropTypes.instanceOf(Object).isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  touched: PropTypes.instanceOf(Object).isRequired,
  errors: PropTypes.instanceOf(Object).isRequired,
};

NasaItemModal.defaultProps = {
  active: false,
};

const enhanceSaveItemForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: props => props.item,
  validate,
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    const item = Object.assign({}, props.item, values);
    props.onSubmit(item);
    resetForm({});
    setSubmitting(false);
  },
  displayName: 'SaveItemForm',
})(NasaItemModal);

export default enhanceSaveItemForm;
