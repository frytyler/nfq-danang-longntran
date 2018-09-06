import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'reactstrap';

/* eslint-disable */
class NasaModal extends React.PureComponent {
  static defaultProps = {
    initialOn: false,
    onToggleModal: () => {}
  }
  initialState = { active: this.props.initialOn }
  state = this.initialState

  static getDerivedStateFromProps(props) {
    return {
      active: props.initialOn,
    };
  }

  getStateHelper = () => {
    return {
      active: this.state.active,
    }
  }

  render() {
    const { active } = this.state;
    return (
      <Modal size="lg" isOpen={active} toggle={this.props.onToggleModal}>
        {this.props.children(this.getStateHelper())}
      </Modal>
    );
  }
}

NasaModal.propTypes = {
  initialOn: PropTypes.bool,
  onToggleModal: PropTypes.func,
};

export default NasaModal;
