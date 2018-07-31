/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar, Modal, FormGroup,
  ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { withFormik } from 'formik';

import jobValidation from './validation';

class JobModal extends React.PureComponent {
  isEditing = () => this.props.job && this.props.job.key;

  renderModalTitle = () => {
    if (this.isEditing()) {
      return 'Update job';
    }
    return 'Create new job';
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
      <Modal show={this.props.active} onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.renderModalTitle()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="jobForm" onSubmit={handleSubmit}>
            <FormGroup controlId="title" validationState={touched.title && errors.title ? 'error' : null}>
              <ControlLabel>Title</ControlLabel>
              <FormControl
                type="text"
                name="title"
                value={values.title}
                componentClass="input"
                placeholder="Job title"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.title && errors.title && <HelpBlock>{errors.title}</HelpBlock>}
            </FormGroup>
            <FormGroup controlId="desc">
              <ControlLabel>Description</ControlLabel>
              <FormControl
                name="desc"
                value={values.desc}
                componentClass="textarea"
                placeholder="Job description"
                onChange={handleChange}
                rows={10}
                onBlur={handleBlur}
              />
            </FormGroup>
            <FormGroup controlId="mediaFile" validationState={errors.mediaFile ? 'error' : null}>
              <ControlLabel>Preview</ControlLabel>
              <FormControl
                type="file"
                name="mediaFile"
                onChange={(event) => {
                  setFieldValue('mediaFile', event.currentTarget.files[0]);
                }}
                accept="audio/*,video/*,image/*"
                componentClass="input"
                placeholder="Media file"
              />
              {errors.mediaFile && <HelpBlock>{errors.mediaFile}</HelpBlock>}
            </FormGroup>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar className="pull-right">
            <Button
              disabled={this.props.isSubmitting}
              form="jobForm"
              className="btn-primary"
              key="submit"
              type="submit"
            >{this.isEditing() ? 'Save' : 'Create'}</Button>
            <Button onClick={this.props.handleCloseModal}>Close</Button>
          </ButtonToolbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

JobModal.propTypes = {
  active: PropTypes.bool,
  job: PropTypes.instanceOf(Object).isRequired,
  values: PropTypes.instanceOf(Object).isRequired,
  handleCloseModal: PropTypes.func,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
};

JobModal.defaultProps = {
  active: false,
  handleCloseModal: () => ({}),
  handleChange: () => ({}),
  handleBlur: () => ({}),
  handleSubmit: () => ({}),
};

const JobForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: props => props.job,
  validate: jobValidation,
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    const job = Object.assign({}, props.job, values);
    props.onSubmit(job);
    resetForm({});
    setSubmitting(false);
  },
  displayName: 'CreateJobForm',
})(JobModal);

export default JobForm;
