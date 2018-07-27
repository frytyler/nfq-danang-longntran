/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Button,
  ButtonToolbar, Modal, FormGroup, ControlLabel,
  FormControl, HelpBlock } from 'react-bootstrap';
import { withFormik } from 'formik';

/* eslint no-confusing-arrow: 0 */
class JobModal extends React.PureComponent {
  render() {
    const {
      handleChange,
      handleBlur,
      values,
      handleSubmit,
      touched,
      errors,
    } = this.props;

    return (
      <Modal show={this.props.active} onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create new job</Modal.Title>
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
            <FormGroup controlId="desc" validationState={touched.desc && errors.desc ? 'error' : null}>
              <ControlLabel>Description</ControlLabel>
              <FormControl
                name="desc"
                value={values.desc}
                componentClass="textarea"
                placeholder="Job description"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.desc && errors.desc && <HelpBlock>{errors.desc}</HelpBlock>}
            </FormGroup>
            <FormGroup>
              <ControlLabel>Preview</ControlLabel>
              <FormControl
                type="file"
                name="mediaUrl"
                inputRef={(ref) => { this.jobMediaRef = ref; }}
                accept="audio/*,video/*,image/*"
                componentClass="input"
                placeholder="Media type"
              />
              <FormControl.Feedback />
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
              type="submit">Create</Button>
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

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({ title: '', desc: '' }),
  validate: ({ title, desc }) => {
    const errors = {};
    if (!title) {
      errors.title = 'Title is required';
    }

    if (!desc) {
      errors.desc = 'Description is required';
    }
    return errors;
  },
  handleSubmit: (values, { props, setSubmitting }) => {
    console.log(values);
    props.onSubmit(values);
    setSubmitting(false);
  },
  displayName: 'BasicForm',
})(JobModal);

export default EnhancedForm;
